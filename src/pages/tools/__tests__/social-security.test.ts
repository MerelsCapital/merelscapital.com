import { describe, it, expect, beforeEach } from 'vitest'
import { renderSocialSecurity, initSocialSecurity } from '../social-security'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const setSelect = (id: string, v: string) => { (document.getElementById(id) as HTMLSelectElement).value = v; (document.getElementById(id) as HTMLSelectElement).dispatchEvent(new Event('change')) }
const click = () => document.getElementById('ss-calc-btn')!.click()
const results = () => document.getElementById('ss-results')!.innerHTML

describe('Social Security Optimizer', () => {
  beforeEach(() => {
    document.body.innerHTML = renderSocialSecurity()
    initSocialSecurity()
  })

  describe('render', () => {
    it('renders required input fields', () => {
      expect(document.getElementById('ss-birth-year')).not.toBeNull()
      expect(document.getElementById('ss-income')).not.toBeNull()
      expect(document.getElementById('ss-marital')).not.toBeNull()
      expect(document.getElementById('ss-calc-btn')).not.toBeNull()
    })

    it('spouse section is hidden initially', () => {
      expect(document.getElementById('ss-spouse-section')!.hidden).toBe(true)
    })

    it('spouse section is visible when married is selected', () => {
      setSelect('ss-marital', 'married')
      expect(document.getElementById('ss-spouse-section')!.hidden).toBe(false)
    })
  })

  describe('validation', () => {
    it('shows error when birth year is cleared', () => {
      set('ss-birth-year', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when income is cleared', () => {
      set('ss-income', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error for implausible birth year', () => {
      set('ss-birth-year', '2010')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when married with empty spouse income', () => {
      setSelect('ss-marital', 'married')
      set('ss-spouse-income', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when married with empty spouse birth year', () => {
      setSelect('ss-marital', 'married')
      set('ss-spouse-income', '50000')
      set('ss-spouse-birth-year', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    beforeEach(() => {
      set('ss-birth-year', '1960')
      set('ss-income', '90000')
    })

    it('shows benefit table with all three claiming ages', () => {
      click()
      expect(results()).toContain('Age 62 (earliest)')
      expect(results()).toContain('67')  // FRA for 1960
      expect(results()).toContain('Age 70 (maximum)')
    })

    it('age 62 benefit has a reduction vs FRA', () => {
      click()
      expect(results()).toContain('−30%')
    })

    it('age 70 benefit has an increase vs FRA', () => {
      click()
      expect(results()).toContain('+24%')
    })

    it('shows breakeven age for claiming at 62 vs FRA', () => {
      click()
      // Birth year 1960 → FRA 67, breakeven 62 vs FRA is age 79
      expect(results()).toContain('Age 79')
    })

    it('shows breakeven age for claiming at FRA vs 70', () => {
      click()
      // Breakeven FRA vs 70: Math.round(67 + 2481*3/(3076-2481)) = Math.round(82.5) = 83
      expect(results()).toContain('Age 83')
    })

    it('annual benefit at FRA is approximately $29,771', () => {
      click()
      // PIA ≈ $2,481/mo → $29,771/yr for birth year 1960, income $90,000
      expect(results()).toContain('$29,771')
    })

    it('shows spousal benefit when married with non-working spouse', () => {
      setSelect('ss-marital', 'married')
      set('ss-spouse-income', '0')
      set('ss-spouse-birth-year', '1962')
      click()
      expect(results()).toContain('Spousal Benefit')
    })
  })
})
