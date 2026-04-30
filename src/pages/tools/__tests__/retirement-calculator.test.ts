import { describe, it, expect, beforeEach } from 'vitest'
import { renderRetirementCalculator, initRetirementCalculator } from '../retirement-calculator'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const click = () => document.getElementById('rc-calc-btn')!.click()
const results = () => document.getElementById('rc-results')!.innerHTML

describe('Retirement Calculator', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRetirementCalculator()
    initRetirementCalculator()
  })

  describe('render', () => {
    it('renders all required input fields', () => {
      expect(document.getElementById('rc-current-age')).not.toBeNull()
      expect(document.getElementById('rc-retirement-age')).not.toBeNull()
      expect(document.getElementById('rc-savings')).not.toBeNull()
      expect(document.getElementById('rc-contribution')).not.toBeNull()
      expect(document.getElementById('rc-return')).not.toBeNull()
      expect(document.getElementById('rc-volatility')).not.toBeNull()
      expect(document.getElementById('rc-income')).not.toBeNull()
      expect(document.getElementById('rc-inflation')).not.toBeNull()
      expect(document.getElementById('rc-years-retired')).not.toBeNull()
      expect(document.getElementById('rc-calc-btn')).not.toBeNull()
    })

    it('renders placeholder in results panel', () => {
      expect(results()).toContain('tool-results-placeholder')
    })
  })

  describe('validation', () => {
    it('shows error when current age field is cleared', () => {
      set('rc-current-age', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when retirement age field is cleared', () => {
      set('rc-retirement-age', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when retirement age is not greater than current age', () => {
      set('rc-current-age', '65')
      set('rc-retirement-age', '65')
      click()
      expect(results()).toContain('tool-error-msg')
      expect(results()).toContain('Retirement age must be greater')
    })

    it('shows error when retirement age is less than current age', () => {
      set('rc-current-age', '65')
      set('rc-retirement-age', '60')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when income field is cleared', () => {
      set('rc-income', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when savings field is cleared', () => {
      set('rc-savings', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('with zero volatility and very high savings, success rate is 100%', () => {
      set('rc-current-age', '40')
      set('rc-retirement-age', '65')
      set('rc-savings', '2000000')
      set('rc-contribution', '2000')
      set('rc-return', '7')
      set('rc-volatility', '0')
      set('rc-income', '60000')
      set('rc-inflation', '3')
      set('rc-years-retired', '25')
      click()
      expect(results()).toContain('100%')
      expect(results()).toContain('Success Probability')
    })

    it('with zero volatility and near-zero savings, success rate is 0%', () => {
      set('rc-current-age', '64')
      set('rc-retirement-age', '65')
      set('rc-savings', '1000')
      set('rc-contribution', '0')
      set('rc-return', '7')
      set('rc-volatility', '0')
      set('rc-income', '100000')
      set('rc-inflation', '3')
      set('rc-years-retired', '25')
      click()
      expect(results()).toContain('0%')
    })

    it('shows median balance and income at retirement', () => {
      click()
      expect(results()).toContain('Projected Balance at Age')
      expect(results()).toContain('Annual Income Needed')
    })

    it('shows the implied portfolio multiple', () => {
      click()
      expect(results()).toContain('Implied Portfolio Multiple')
    })
  })
})
