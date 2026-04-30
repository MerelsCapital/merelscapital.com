import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderRetirementQuiz, initRetirementQuiz } from '../retirement-quiz'

const selectOption = (questionIndex: number, optionIndex: number) => {
  const radio = document.querySelector<HTMLInputElement>(`input[name="q${questionIndex}"][value="${optionIndex}"]`)!
  radio.checked = true
}
const click = () => document.getElementById('rq-submit-btn')!.click()
const results = () => document.getElementById('rq-results')!

describe('Retirement Readiness Quiz', () => {
  beforeEach(() => {
    document.body.innerHTML = renderRetirementQuiz()
    initRetirementQuiz()
  })

  describe('render', () => {
    it('renders all 10 questions', () => {
      const questions = document.querySelectorAll('.quiz-question')
      expect(questions.length).toBe(10)
    })

    it('renders 4 options per question', () => {
      const firstQuestion = document.querySelectorAll('input[name="q0"]')
      expect(firstQuestion.length).toBe(4)
    })

    it('renders the submit button', () => {
      expect(document.getElementById('rq-submit-btn')).not.toBeNull()
    })

    it('results panel is hidden initially', () => {
      expect(results().hidden).toBe(true)
    })
  })

  describe('validation', () => {
    it('calls alert when questions are unanswered', () => {
      click()
      expect(vi.mocked(window.alert)).toHaveBeenCalled()
    })

    it('does not show results when questions are unanswered', () => {
      click()
      expect(results().hidden).toBe(true)
    })

    it('calls alert with count of unanswered questions', () => {
      // Answer only 5 of 10
      for (let i = 0; i < 5; i++) selectOption(i, 1)
      click()
      expect(vi.mocked(window.alert)).toHaveBeenCalledWith(expect.stringContaining('5 remaining'))
    })
  })

  describe('scoring', () => {
    it('shows "Early Stage" when all answers are minimum (0)', () => {
      for (let i = 0; i < 10; i++) selectOption(i, 0)
      click()
      expect(results().hidden).toBe(false)
      expect(results().innerHTML).toContain('Early Stage')
    })

    it('shows "Well Prepared" when all answers are maximum (3)', () => {
      for (let i = 0; i < 10; i++) selectOption(i, 3)
      click()
      expect(results().innerHTML).toContain('Well Prepared')
    })

    it('shows "On Track" for a high-mid score', () => {
      // 8 questions at 3 + 2 questions at 1 = 24 + 2 = 26 → should be "Well Prepared" (25-30)
      // Let's do 7 at 2 + 3 at 1 = 14 + 3 = 17 → "Building Momentum" (9-18)? No, 17 is "Building Momentum"
      // 7 at 3 + 3 at 0 = 21 + 0 = 21 → "On Track" (19-24)
      for (let i = 0; i < 7; i++) selectOption(i, 3)
      for (let i = 7; i < 10; i++) selectOption(i, 0)
      click()
      expect(results().innerHTML).toContain('On Track')
    })

    it('shows "Building Momentum" for mid-range score', () => {
      // 10 questions at 1 = score 10 → "Building Momentum" (9-18)
      for (let i = 0; i < 10; i++) selectOption(i, 1)
      click()
      expect(results().innerHTML).toContain('Building Momentum')
    })

    it('displays the numeric score out of 30', () => {
      for (let i = 0; i < 10; i++) selectOption(i, 2)
      click()
      expect(results().innerHTML).toContain('20 / 30')
    })
  })
})
