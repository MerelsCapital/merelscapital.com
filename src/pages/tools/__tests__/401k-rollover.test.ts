import { describe, it, expect, beforeEach } from 'vitest'
import { renderRollover401k, initRollover401k } from '../401k-rollover'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const setSelect = (id: string, v: string) => { (document.getElementById(id) as HTMLSelectElement).value = v }
const click = () => document.getElementById('kr-calc-btn')!.click()
const results = () => document.getElementById('kr-results')!.innerHTML

describe('401k Rollover Comparison', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRollover401k()
    initRollover401k()
  })

  describe('render', () => {
    it('renders all required fields', () => {
      expect(document.getElementById('kr-balance')).not.toBeNull()
      expect(document.getElementById('kr-age')).not.toBeNull()
      expect(document.getElementById('kr-retirement-age')).not.toBeNull()
      expect(document.getElementById('kr-return')).not.toBeNull()
      expect(document.getElementById('kr-old-er')).not.toBeNull()
      expect(document.getElementById('kr-ira-er')).not.toBeNull()
      expect(document.getElementById('kr-new-er')).not.toBeNull()
    })

    it('new employer ER has no default value', () => {
      const newER = document.getElementById('kr-new-er') as HTMLInputElement
      expect(newER.value).toBe('')
    })
  })

  describe('validation', () => {
    it('shows error when both IRA ER and new employer ER are blank', () => {
      set('kr-ira-er', '')
      set('kr-new-er', '')
      click()
      expect(results()).toContain('tool-error-msg')
      expect(results()).toContain('at least one rollover destination')
    })

    it('shows error when retirement age is not greater than current age', () => {
      set('kr-age', '65')
      set('kr-retirement-age', '60')
      click()
      expect(results()).toContain('tool-error-msg')
      expect(results()).toContain('Retirement age must be greater')
    })

    it('shows error when balance is cleared', () => {
      set('kr-balance', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when old plan ER is cleared', () => {
      set('kr-old-er', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('proceeds when only IRA ER is provided', () => {
      set('kr-ira-er', '0.10')
      set('kr-new-er', '')
      click()
      expect(results()).not.toContain('tool-error-msg')
    })

    it('proceeds when only new employer ER is provided', () => {
      set('kr-ira-er', '')
      set('kr-new-er', '0.40')
      click()
      expect(results()).not.toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('lower IRA expense ratio yields higher value than old plan', () => {
      set('kr-balance', '100000')
      set('kr-age', '40')
      set('kr-retirement-age', '65')
      set('kr-return', '7')
      set('kr-old-er', '1.0')
      set('kr-ira-er', '0.05')
      set('kr-new-er', '')
      setSelect('kr-tax-rate', '22')
      click()
      // IRA (0.05% ER) vs old plan (1.0% ER) — IRA should win
      expect(results()).toContain('Rollover to IRA')
      expect(results()).toContain('Leave in Old Plan')
      const html = results()
      const iraPos = html.indexOf('Rollover to IRA')
      const oldPos = html.indexOf('Leave in Old Plan')
      // IRA should appear first (sorted by value, highest first)
      expect(iraPos).toBeLessThan(oldPos)
    })

    it('same expense ratio yields same value for IRA and old plan', () => {
      set('kr-balance', '100000')
      set('kr-age', '40')
      set('kr-retirement-age', '65')
      set('kr-return', '7')
      set('kr-old-er', '0.50')
      set('kr-ira-er', '0.50')
      set('kr-new-er', '')
      click()
      // Both at 0.5% ER, results should be equal
      expect(results()).toContain('+$0')
    })

    it('excludes IRA option when IRA ER is blank', () => {
      set('kr-ira-er', '')
      set('kr-new-er', '0.40')
      click()
      expect(results()).not.toContain('Rollover to IRA')
      expect(results()).toContain('Rollover to New Employer Plan')
    })

    it('excludes new employer option when new employer ER is blank', () => {
      set('kr-ira-er', '0.10')
      set('kr-new-er', '')
      click()
      expect(results()).not.toContain('Rollover to New Employer Plan')
      expect(results()).toContain('Rollover to IRA')
    })

    it('shows all four options when both rollover ERs are provided', () => {
      set('kr-ira-er', '0.10')
      set('kr-new-er', '0.40')
      click()
      expect(results()).toContain('Rollover to IRA')
      expect(results()).toContain('Rollover to New Employer Plan')
      expect(results()).toContain('Leave in Old Plan')
      expect(results()).toContain('Cash Out Now')
    })

    it('mentions early withdrawal penalty for age under 59.5', () => {
      set('kr-age', '40')
      set('kr-ira-er', '0.10')
      set('kr-new-er', '')
      click()
      expect(results()).toContain('early withdrawal penalty')
    })

    it('does not mention early withdrawal penalty for age over 59.5', () => {
      set('kr-age', '62')
      set('kr-retirement-age', '70')
      set('kr-ira-er', '0.10')
      set('kr-new-er', '')
      click()
      expect(results()).not.toContain('early withdrawal penalty')
    })
  })
})
