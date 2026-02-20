import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'How many tons of plastic waste enter the ocean every year?',
    options: ['1 million tons', '5 million tons', '8 million tons', '12 million tons'],
    correctAnswer: 2,
    explanation: 'Approximately 8 million tons of plastic waste enter the ocean annually, equivalent to dumping a garbage truck of plastic every minute.',
  },
  {
    id: 2,
    question: 'What percentage of plastic ever produced has been recycled?',
    options: ['9%', '25%', '40%', '55%'],
    correctAnswer: 0,
    explanation: 'Only about 9% of all plastic ever produced has been recycled. The majority ends up in landfills or the environment.',
  },
  {
    id: 3,
    question: 'How long does it take for a plastic bottle to decompose in the ocean?',
    options: ['50 years', '100 years', '450 years', '1000 years'],
    correctAnswer: 2,
    explanation: 'A plastic bottle can take up to 450 years to decompose in the ocean, breaking down into harmful microplastics.',
  },
  {
    id: 4,
    question: 'Which country produces the most plastic waste per capita?',
    options: ['China', 'United States', 'India', 'Germany'],
    correctAnswer: 1,
    explanation: 'The United States produces the most plastic waste per capita, generating approximately 130 kg per person annually.',
  },
  {
    id: 5,
    question: 'What is the Great Pacific Garbage Patch?',
    options: [
      'A floating island of trash',
      'A collection of microplastics and debris',
      'An underwater landfill',
      'A recycling facility',
    ],
    correctAnswer: 1,
    explanation: 'The Great Pacific Garbage Patch is a massive collection of marine debris, primarily microplastics, spanning 1.6 million square kilometers.',
  },
  {
    id: 6,
    question: 'How many marine species are affected by plastic pollution?',
    options: ['Over 100', 'Over 300', 'Over 700', 'Over 1000'],
    correctAnswer: 2,
    explanation: 'Over 700 marine species are known to be affected by plastic pollution through ingestion, entanglement, or habitat disruption.',
  },
  {
    id: 7,
    question: 'What percentage of seabirds have plastic in their stomachs?',
    options: ['30%', '50%', '70%', '90%'],
    correctAnswer: 3,
    explanation: 'Studies estimate that 90% of seabirds have ingested plastic, mistaking it for food, which can lead to starvation and death.',
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = '';
    let messageColor = '';

    if (percentage >= 80) {
      message = 'Outstanding! You\'re a plastic pollution expert!';
      messageColor = 'text-green-600 dark:text-green-400';
    } else if (percentage >= 60) {
      message = 'Great job! You have a solid understanding of the issue.';
      messageColor = 'text-ocean-600 dark:text-ocean-400';
    } else if (percentage >= 40) {
      message = 'Good effort! Keep learning about plastic pollution.';
      messageColor = 'text-amber-600 dark:text-amber-400';
    } else {
      message = 'Thanks for trying! There\'s much to learn about this critical issue.';
      messageColor = 'text-red-600 dark:text-red-400';
    }

    return (
      <div className="flex flex-col">
        {/* Header */}
        <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Quiz Complete!
              </h1>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <Card className="border-ocean-200 dark:border-ocean-800">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ocean-500 to-forest-500">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-ocean-900 dark:text-ocean-50">
                    Your Score: {score} / {quizQuestions.length}
                  </CardTitle>
                  <CardDescription className={`text-xl font-semibold ${messageColor}`}>
                    {percentage}% Correct
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center text-lg text-ocean-700 dark:text-ocean-300">
                    {message}
                  </p>

                  <div className="space-y-4 rounded-lg bg-ocean-50 p-6 dark:bg-ocean-900">
                    <h3 className="font-semibold text-ocean-900 dark:text-ocean-50">
                      Did you know?
                    </h3>
                    <p className="text-sm text-ocean-700 dark:text-ocean-300">
                      Every piece of plastic ever made still exists today in some form. By reducing our plastic consumption and supporting recycling initiatives, we can make a significant impact on ocean health and marine life.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button
                      onClick={handleRetake}
                      size="lg"
                      className="bg-gradient-to-r from-ocean-600 to-forest-600 hover:from-ocean-700 hover:to-forest-700"
                    >
                      <RotateCcw className="mr-2 h-5 w-5" />
                      Retake Quiz
                    </Button>
                    <Button
                      onClick={() => window.location.href = '/map'}
                      variant="outline"
                      size="lg"
                      className="border-ocean-300 text-ocean-700 hover:bg-ocean-50 dark:border-ocean-700 dark:text-ocean-300 dark:hover:bg-ocean-900"
                    >
                      Explore the Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Plastic Pollution Quiz
            </h1>
            <p className="text-lg text-ocean-50">
              Test your knowledge about plastic pollution and its impact on our oceans
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-sm font-medium text-ocean-700 dark:text-ocean-300">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="border-ocean-200 dark:border-ocean-800">
              <CardHeader>
                <CardTitle className="text-2xl text-ocean-900 dark:text-ocean-50">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showCorrect = showFeedback && isCorrect;
                    const showIncorrect = showFeedback && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback}
                        className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                          showCorrect
                            ? 'border-green-500 bg-green-50 dark:bg-green-950'
                            : showIncorrect
                            ? 'border-red-500 bg-red-50 dark:bg-red-950'
                            : isSelected
                            ? 'border-ocean-500 bg-ocean-50 dark:bg-ocean-900'
                            : 'border-ocean-200 hover:border-ocean-300 hover:bg-ocean-50 dark:border-ocean-800 dark:hover:border-ocean-700 dark:hover:bg-ocean-900'
                        } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-ocean-900 dark:text-ocean-50">
                            {option}
                          </span>
                          {showCorrect && (
                            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                          )}
                          {showIncorrect && (
                            <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div
                    className={`rounded-lg p-4 ${
                      selectedAnswer === currentQ.correctAnswer
                        ? 'bg-green-50 dark:bg-green-950'
                        : 'bg-amber-50 dark:bg-amber-950'
                    }`}
                  >
                    <p className="mb-2 font-semibold text-ocean-900 dark:text-ocean-50">
                      {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Not quite!'}
                    </p>
                    <p className="text-sm text-ocean-700 dark:text-ocean-300">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {showFeedback && (
                  <Button
                    onClick={handleNext}
                    size="lg"
                    className="w-full bg-gradient-to-r from-ocean-600 to-forest-600 hover:from-ocean-700 hover:to-forest-700"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
