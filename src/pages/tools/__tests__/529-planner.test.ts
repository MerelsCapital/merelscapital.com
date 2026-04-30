import { describe, it, expect, beforeEach } from 'vitest'
import { render529Planner, init529Planner } from '../529-planner'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const setSelect = (id: string, v: string) => { (document.getElementById(id) as HTMLSelectElement).value = v }
const click = () => document.getElementById('p529-calc-btn')!.click()
const results = () => document.getElementById('p529-results')!.innerHTML

describe('529 Education Planner', () => {
  beforeEach(() => {
    document.body.innerHTML = render529Planner()
    init529Planner()
  })

  describe('render', () => {
    it('renders all required fields', () => {
      expect(document.getElementById('p529-child-age')).not.toBeNull()
      expect(document.getElementById('p529-school')).not.toBeNull()
      expect(document.getElementById('p529-balance')).not.toBeNull()
      expect(document.getElementById('p529-monthly')).not.toBeNull()
      expect(document.getElementById('p529-return')).not.toBeNull()
    })

    it('renders all three school type options', () => {
      const select = document.getElementById('p529-school') as HTMLSelectElement
      expect(select.options.length).toBe(3)
    })
  })

  describe('validation', () => {
    it('shows error when child age is 18', () => {
      set('p529-child-age', '18')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when child age is over 18', () => {
      set('p529-child-age', '20')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when child age is cleared', () => {
      set('p529-child-age', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when balance is cleared', () => {
      set('p529-balance', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when monthly contribution is cleared', () => {
      set('p529-monthly', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when return rate is cleared', () => {
      set('p529-return', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('shows a surplus when well-funded', () => {
      set('p529-child-age', '5')
      setSelect('p529-school', 'public-in')
      set('p529-balance', '200000')
      set('p529-monthly', '1000')
      set('p529-return', '7')
      click()
      expect(results()).toContain('on track to fully cover')
      expect(results()).toContain('Surplus')
    })

    it('shows a shortfall when underfunded', () => {
      set('p529-child-age', '15')
      setSelect('p529-school', 'private')
      set('p529-balance', '5000')
      set('p529-monthly', '100')
      set('p529-return', '7')
      click()
      expect(results()).toContain('Shortfall')
      expect(results()).toContain('save')
    })

    it('private school cost is higher than public in-state', () => {
      set('p529-child-age', '5')
      set('p529-balance', '10000')
      set('p529-monthly', '300')
      set('p529-return', '7')

      setSelect('p529-school', 'public-in')
      click()
      const publicHtml = results()

      document.body.innerHTML = render529Planner()
      init529Planner()
      set('p529-child-age', '5')
      set('p529-balance', '10000')
      set('p529-monthly', '300')
      set('p529-return', '7')
      setSelect('p529-school', 'private')
      click()
      const privateHtml = results()

      const extractCost = (html: string) => {
        const match = html.match(/4-Year Cost.*?\$([0-9,]+)/s)
        return match ? parseInt(match[1].replace(/,/g, '')) : 0
      }
      expect(extractCost(privateHtml)).toBeGreaterThan(extractCost(publicHtml))
    })

    it('100% coverage shown when on track', () => {
      set('p529-child-age', '5')
      setSelect('p529-school', 'public-in')
      set('p529-balance', '300000')
      set('p529-monthly', '1000')
      set('p529-return', '7')
      click()
      expect(results()).toContain('100%')
    })

    it('shows projected savings and total cost', () => {
      set('p529-child-age', '10')
      setSelect('p529-school', 'public-out')
      set('p529-balance', '20000')
      set('p529-monthly', '500')
      set('p529-return', '6')
      click()
      expect(results()).toContain('Projected Savings at College Start')
      expect(results()).toContain('Estimated 4-Year Cost')
    })
  })
})
