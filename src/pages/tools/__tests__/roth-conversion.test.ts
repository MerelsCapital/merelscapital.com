import { describe, it, expect, beforeEach } from 'vitest'
import { renderRothConversion, initRothConversion } from '../roth-conversion'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const click = () => document.getElementById('rc2-calc-btn')!.click()
const results = () => document.getElementById('rc2-results')!.innerHTML

describe('Roth Conversion Analyzer', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRothConversion()
    initRothConversion()
  })

  describe('render', () => {
    it('renders all required fields', () => {
      expect(document.getElementById('rc2-balance')).not.toBeNull()
      expect(document.getElementById('rc2-annual')).not.toBeNull()
      expect(document.getElementById('rc2-current-rate')).not.toBeNull()
      expect(document.getElementById('rc2-future-rate')).not.toBeNull()
      expect(document.getElementById('rc2-years')).not.toBeNull()
      expect(document.getElementById('rc2-return')).not.toBeNull()
    })
  })

  describe('validation', () => {
    it('shows error when balance is cleared', () => {
      set('rc2-balance', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when years is cleared', () => {
      set('rc2-years', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when years is zero', () => {
      set('rc2-years', '0')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when annual conversion is cleared', () => {
      set('rc2-annual', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when current tax rate is cleared', () => {
      set('rc2-current-rate', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('zero conversion produces zero net benefit', () => {
      set('rc2-balance', '300000')
      set('rc2-annual', '0')
      set('rc2-current-rate', '22')
      set('rc2-future-rate', '22')
      set('rc2-years', '10')
      set('rc2-return', '7')
      click()
      // No conversion means no/zero net benefit
      expect(results()).toContain('$0')
    })

    it('higher future tax rate makes conversion advantageous', () => {
      set('rc2-balance', '400000')
      set('rc2-annual', '50000')
      set('rc2-current-rate', '22')
      set('rc2-future-rate', '35')
      set('rc2-years', '15')
      set('rc2-return', '7')
      click()
      expect(results()).toContain('tool-metric-positive')
    })

    it('lower future tax rate makes no conversion better', () => {
      set('rc2-balance', '400000')
      set('rc2-annual', '50000')
      set('rc2-current-rate', '35')
      set('rc2-future-rate', '12')
      set('rc2-years', '15')
      set('rc2-return', '7')
      click()
      expect(results()).toContain('tool-metric-warning')
      expect(results()).toContain('Staying traditional is more efficient')
    })

    it('shows both no-conversion and with-conversion values', () => {
      click()
      expect(results()).toContain('No Conversion (after tax)')
      expect(results()).toContain('With Conversion (after tax)')
    })

    it('shows total conversion tax cost', () => {
      set('rc2-balance', '100000')
      set('rc2-annual', '25000')
      set('rc2-current-rate', '22')
      set('rc2-future-rate', '25')
      set('rc2-years', '5')
      set('rc2-return', '7')
      click()
      // Tax cost = 25000 * 0.22 * 4 years (hits 100k limit in year 4) = $22,000 for 4 years
      expect(results()).toContain('Total Conversion Tax Cost')
    })

    it('shows year-by-year projection table', () => {
      click()
      expect(results()).toContain('Traditional')
      expect(results()).toContain('Roth')
      expect(results()).toContain('Combined')
    })
  })
})
