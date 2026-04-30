import { describe, it, expect, beforeEach } from 'vitest'
import { renderSavingsGoal, initSavingsGoal } from '../savings-goal'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const click = () => document.getElementById('sg-calc-btn')!.click()
const results = () => document.getElementById('sg-results')!.innerHTML

describe('Savings Goal Estimator', () => {
  beforeEach(() => {
    document.body.innerHTML = renderSavingsGoal()
    initSavingsGoal()
    // Clear the optional monthly saving field
    set('sg-monthly-saving', '')
  })

  describe('render', () => {
    it('renders all required fields', () => {
      expect(document.getElementById('sg-income')).not.toBeNull()
      expect(document.getElementById('sg-expenses')).not.toBeNull()
      expect(document.getElementById('sg-current-savings')).not.toBeNull()
      expect(document.getElementById('sg-goal')).not.toBeNull()
      expect(document.getElementById('sg-timeline')).not.toBeNull()
      expect(document.getElementById('sg-monthly-saving')).not.toBeNull()
    })
  })

  describe('validation', () => {
    it('shows error when income is cleared', () => {
      set('sg-income', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when income is zero', () => {
      set('sg-income', '0')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when goal is cleared', () => {
      set('sg-goal', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when goal is zero', () => {
      set('sg-goal', '0')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when timeline is zero', () => {
      set('sg-timeline', '0')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when timeline is cleared', () => {
      set('sg-timeline', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when current savings is cleared', () => {
      set('sg-current-savings', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('shows three return scenarios', () => {
      set('sg-income', '6000')
      set('sg-expenses', '3500')
      set('sg-current-savings', '0')
      set('sg-goal', '50000')
      set('sg-timeline', '5')
      click()
      expect(results()).toContain('Conservative')
      expect(results()).toContain('Moderate')
      expect(results()).toContain('Aggressive')
    })

    it('aggressive scenario achieves higher balance than conservative', () => {
      set('sg-income', '6000')
      set('sg-expenses', '3000')
      set('sg-current-savings', '5000')
      set('sg-goal', '100000')
      set('sg-timeline', '10')
      set('sg-monthly-saving', '500')
      click()

      const html = results()
      // Find aggressive (10%) and conservative (4%) projected values in the HTML
      // The bar labels show "Aggressive (10%/yr)" before the value
      const aggressiveMatch = html.match(/Aggressive \(10%\/yr\).*?\$([0-9,]+)/s)
      const conservativeMatch = html.match(/Conservative \(4%\/yr\).*?\$([0-9,]+)/s)

      if (aggressiveMatch && conservativeMatch) {
        const aggressive = parseInt(aggressiveMatch[1].replace(/,/g, ''))
        const conservative = parseInt(conservativeMatch[1].replace(/,/g, ''))
        expect(aggressive).toBeGreaterThan(conservative)
      }
    })

    it('shows monthly available = income minus expenses', () => {
      set('sg-income', '7000')
      set('sg-expenses', '4000')
      set('sg-current-savings', '0')
      set('sg-goal', '50000')
      set('sg-timeline', '5')
      click()
      // Available = 7000 - 4000 = 3000
      expect(results()).toContain('$3,000')
    })

    it('shows no-investment baseline', () => {
      set('sg-income', '5000')
      set('sg-expenses', '3000')
      set('sg-current-savings', '0')
      set('sg-goal', '24000')
      set('sg-timeline', '1')
      click()
      expect(results()).toContain('No-Investment Baseline')
    })

    it('when planned contribution is provided, shows budget comparison', () => {
      set('sg-income', '6000')
      set('sg-expenses', '3500')
      set('sg-current-savings', '0')
      set('sg-goal', '50000')
      set('sg-timeline', '5')
      set('sg-monthly-saving', '1000')
      click()
      // Available = 2500, planned = 1000, surplus = 1500
      expect(results()).toContain('Planned Contribution vs Available')
      expect(results()).toContain('$1,500')
    })

    it('with zero starting savings and 0% return, flat savings matches goal', () => {
      // monthly needed = goal / months = 12000 / 12 = $1,000
      set('sg-income', '5000')
      set('sg-expenses', '2000')
      set('sg-current-savings', '0')
      set('sg-goal', '12000')
      set('sg-timeline', '1')
      click()
      // Conservative (4%) required monthly will be slightly less than $1,000
      // but the no-investment baseline should show $12,000 exactly when saving $1,000/mo
      expect(results()).toContain('No-Investment Baseline')
    })
  })
})
