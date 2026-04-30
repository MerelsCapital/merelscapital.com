import { describe, it, expect, beforeEach } from 'vitest'
import { renderTaxSavings, initTaxSavings } from '../tax-savings'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const setSelect = (id: string, v: string) => { (document.getElementById(id) as HTMLSelectElement).value = v }
const click = () => document.getElementById('ts-calc-btn')!.click()
const results = () => document.getElementById('ts-results')!.innerHTML

describe('Tax Savings Estimator', () => {
  beforeEach(() => {
    document.body.innerHTML = renderTaxSavings()
    initTaxSavings()
  })

  describe('render', () => {
    it('renders all required fields', () => {
      expect(document.getElementById('ts-income')).not.toBeNull()
      expect(document.getElementById('ts-age')).not.toBeNull()
      expect(document.getElementById('ts-marginal')).not.toBeNull()
      expect(document.getElementById('ts-charitable')).not.toBeNull()
      expect(document.getElementById('ts-current-itemized')).not.toBeNull()
      expect(document.getElementById('ts-401k-contrib')).not.toBeNull()
      expect(document.getElementById('ts-hsa')).not.toBeNull()
      expect(document.getElementById('ts-current-hsa')).not.toBeNull()
    })
  })

  describe('validation', () => {
    it('shows error when income is cleared', () => {
      set('ts-income', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when income is zero', () => {
      set('ts-income', '0')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when age is cleared', () => {
      set('ts-age', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when marginal rate is cleared', () => {
      set('ts-marginal', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when charitable giving is cleared', () => {
      set('ts-charitable', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('identifies 401k gap strategy when not maxing contributions', () => {
      set('ts-income', '150000')
      set('ts-age', '45')
      set('ts-marginal', '22')
      set('ts-charitable', '1000')
      set('ts-current-itemized', '5000')
      set('ts-401k-contrib', '5')  // 5% of $150k = $7,500 — well under $23,000 limit
      setSelect('ts-hsa', 'none')
      set('ts-current-hsa', '0')
      click()
      expect(results()).toContain('401k')
    })

    it('identifies QCD strategy when age is 70 or above', () => {
      set('ts-income', '200000')
      set('ts-age', '72')
      set('ts-marginal', '24')
      set('ts-charitable', '10000')
      set('ts-current-itemized', '15000')
      set('ts-401k-contrib', '0')
      setSelect('ts-hsa', 'none')
      set('ts-current-hsa', '0')
      click()
      expect(results()).toContain('QCD')
    })

    it('does not identify QCD strategy for age below 70', () => {
      set('ts-income', '200000')
      set('ts-age', '55')
      set('ts-marginal', '24')
      set('ts-charitable', '10000')
      set('ts-current-itemized', '15000')
      set('ts-401k-contrib', '100')  // Already maxing
      setSelect('ts-hsa', 'none')
      set('ts-current-hsa', '0')
      click()
      expect(results()).not.toContain('Qualified Charitable Distribution')
    })

    it('identifies HSA strategy when HSA eligible and not maxing', () => {
      set('ts-income', '120000')
      set('ts-age', '40')
      set('ts-marginal', '22')
      set('ts-charitable', '500')
      set('ts-current-itemized', '10000')
      set('ts-401k-contrib', '15')
      setSelect('ts-hsa', 'family')
      set('ts-current-hsa', '1000')  // Under $8,300 family limit
      click()
      expect(results()).toContain('HSA')
    })

    it('401k strategy saving equals gap times marginal rate', () => {
      // Income $100,000, 0% contribution = $0 saved, limit = $23,000, rate = 22%
      // Expected saving = 23,000 * 0.22 = $5,060
      set('ts-income', '100000')
      set('ts-age', '45')
      set('ts-marginal', '22')
      set('ts-charitable', '0')
      set('ts-current-itemized', '0')
      set('ts-401k-contrib', '0')
      setSelect('ts-hsa', 'none')
      set('ts-current-hsa', '0')
      click()
      // 23000 * 0.22 = 5060 → "$5,060"
      expect(results()).toContain('$5,060')
    })

    it('shows total potential savings', () => {
      click()
      expect(results()).toContain('Total Potential Savings')
    })
  })
})
