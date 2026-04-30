import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderRiskTolerance, initRiskTolerance } from '../risk-tolerance'

const selectOption = (qi: number, score: number) => {
  const radio = document.querySelector<HTMLInputElement>(`input[name="rtq${qi}"][value="${score}"]`)!
  radio.checked = true
}
const click = () => document.getElementById('rtq-submit-btn')!.click()
const results = () => document.getElementById('rtq-results')!

describe('Risk Tolerance Questionnaire', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRiskTolerance()
    initRiskTolerance()
  })

  describe('render', () => {
    it('renders all 8 questions', () => {
      expect(document.querySelectorAll('.quiz-question').length).toBe(8)
    })

    it('renders 4 options per question', () => {
      expect(document.querySelectorAll('input[name="rtq0"]').length).toBe(4)
    })

    it('results panel is hidden initially', () => {
      expect(results().hidden).toBe(true)
    })
  })

  describe('validation', () => {
    it('calls alert when no questions answered', () => {
      click()
      expect(vi.mocked(window.alert)).toHaveBeenCalled()
    })

    it('keeps results hidden when questions unanswered', () => {
      click()
      expect(results().hidden).toBe(true)
    })

    it('calls alert with remaining count', () => {
      for (let i = 0; i < 4; i++) selectOption(i, 2)
      click()
      expect(vi.mocked(window.alert)).toHaveBeenCalledWith(expect.stringContaining('4 remaining'))
    })
  })

  describe('scoring', () => {
    it('all 1s (score 8) → Conservative', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 1)
      click()
      expect(results().innerHTML).toContain('Conservative')
      expect(results().innerHTML).toContain('8 / 32')
    })

    it('all 4s (score 32) → Aggressive', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 4)
      click()
      expect(results().innerHTML).toContain('Aggressive')
      expect(results().innerHTML).toContain('32 / 32')
    })

    it('score 16 → Moderately Conservative', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 2)
      click()
      expect(results().innerHTML).toContain('Moderately Conservative')
      expect(results().innerHTML).toContain('16 / 32')
    })

    it('score 24 → Moderate', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 3)
      click()
      expect(results().innerHTML).toContain('Moderate')
      expect(results().innerHTML).toContain('24 / 32')
    })

    it('shows allocation bars for equities, fixed income, alternatives', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 1)
      click()
      expect(results().innerHTML).toContain('Equities')
      expect(results().innerHTML).toContain('Fixed Income')
      expect(results().innerHTML).toContain('Alternatives')
    })

    it('conservative profile has lower equity allocation than aggressive', () => {
      for (let i = 0; i < 8; i++) selectOption(i, 1)
      click()
      const conservativeHtml = results().innerHTML

      document.body.innerHTML = renderRiskTolerance()
      initRiskTolerance()
      for (let i = 0; i < 8; i++) selectOption(i, 4)
      click()
      const aggressiveHtml = results().innerHTML

      // Conservative = 20% equities (shows "20%"), Aggressive = 90% equities (shows "90%")
      expect(conservativeHtml).toContain('20%')
      expect(aggressiveHtml).toContain('90%')
    })
  })
})
