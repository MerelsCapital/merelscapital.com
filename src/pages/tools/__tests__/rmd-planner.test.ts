import { describe, it, expect, beforeEach } from 'vitest'
import { renderRmdPlanner, initRmdPlanner } from '../rmd-planner'

const set = (id: string, v: string) => { (document.getElementById(id) as HTMLInputElement).value = v }
const setSelect = (id: string, v: string) => { (document.getElementById(id) as HTMLSelectElement).value = v }
const click = () => document.getElementById('rmd-calc-btn')!.click()
const results = () => document.getElementById('rmd-results')!.innerHTML

describe('RMD Planner', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRmdPlanner()
    initRmdPlanner()
  })

  describe('render', () => {
    it('renders required input fields', () => {
      expect(document.getElementById('rmd-age')).not.toBeNull()
      expect(document.getElementById('rmd-balance')).not.toBeNull()
      expect(document.getElementById('rmd-growth')).not.toBeNull()
      expect(document.getElementById('rmd-tax')).not.toBeNull()
    })
  })

  describe('validation', () => {
    it('shows error when balance is cleared', () => {
      set('rmd-balance', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when age is cleared', () => {
      set('rmd-age', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })

    it('shows error when growth rate is cleared', () => {
      set('rmd-growth', '')
      click()
      expect(results()).toContain('tool-error-msg')
    })
  })

  describe('calculations', () => {
    it('shows no RMD rows for ages below 73', () => {
      set('rmd-age', '70')
      set('rmd-balance', '500000')
      set('rmd-growth', '0')
      setSelect('rmd-tax', '22')
      click()
      // First three rows (ages 70-72) should all show — for RMD
      const cells = document.querySelectorAll('.tool-table td')
      // Find cells that contain RMD values — they should all be "—" for ages < 73
      const rmdCells = Array.from(cells).filter((_, i) => i % 4 === 2) // 3rd column (RMD)
      expect(rmdCells[0].textContent).toBe('—')
      expect(rmdCells[1].textContent).toBe('—')
      expect(rmdCells[2].textContent).toBe('—')
    })

    it('at age 73 with $750,000 balance and 0% growth, first RMD is ~$28,302', () => {
      set('rmd-age', '73')
      set('rmd-balance', '750000')
      set('rmd-growth', '0')
      setSelect('rmd-tax', '22')
      click()
      // RMD = 750000 / 26.5 = 28,301.887… → rounded to $28,302
      expect(results()).toContain('$28,302')
    })

    it('at age 73, 22% tax on first RMD of $28,302 is ~$6,226', () => {
      set('rmd-age', '73')
      set('rmd-balance', '750000')
      set('rmd-growth', '0')
      setSelect('rmd-tax', '22')
      click()
      // Tax = 28301.887 * 0.22 = 6,226.41 → $6,226
      expect(results()).toContain('$6,226')
    })

    it('shows total RMDs and total estimated tax summary', () => {
      set('rmd-age', '73')
      set('rmd-balance', '500000')
      set('rmd-growth', '5')
      setSelect('rmd-tax', '24')
      click()
      expect(results()).toContain('Total RMDs')
      expect(results()).toContain('Est. Total Tax')
    })

    it('RMDs increase with positive growth rate', () => {
      // With growth, balance grows so RMDs should exceed the zero-growth amount
      set('rmd-age', '73')
      set('rmd-balance', '500000')
      set('rmd-growth', '0')
      setSelect('rmd-tax', '22')
      click()
      const zeroGrowthHtml = results()

      document.body.innerHTML = renderRmdPlanner()
      initRmdPlanner()
      set('rmd-age', '73')
      set('rmd-balance', '500000')
      set('rmd-growth', '7')
      setSelect('rmd-tax', '22')
      click()
      const withGrowthHtml = results()

      // Total RMDs should be a larger dollar value with growth
      const extractTotal = (html: string) => {
        const match = html.match(/Total RMDs.*?\$([0-9,]+)/s)
        return match ? parseInt(match[1].replace(/,/g, '')) : 0
      }
      expect(extractTotal(withGrowthHtml)).toBeGreaterThan(extractTotal(zeroGrowthHtml))
    })
  })
})
