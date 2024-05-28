import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const questions = [
  {
    questionText: 'Quelle est la capitale de la France ?',
    answerOptions: [
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lyon', isCorrect: false },
      { answerText: 'Marseille', isCorrect: false },
      { answerText: 'Bordeaux', isCorrect: false },
    ],
  },
  {
    questionText: 'Qui est le président des États-Unis en 2021 ?',
    answerOptions: [
      { answerText: 'Donald Trump', isCorrect: false },
      { answerText: 'Joe Biden', isCorrect: true },
      { answerText: 'Barack Obama', isCorrect: false },
      { answerText: 'George Bush', isCorrect: false },
    ],
  },
  // Ajoutez plus de questions selon vos besoins
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Vous avez terminé ! Score : ${score}/${questions.length}`);
      // Ici, vous pouvez ajouter une logique pour redémarrer le quiz ou naviguer vers un autre écran
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionStyle}>{questions[currentQuestion].questionText}</Text>
      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
        <Button
          key={index}
          title={answerOption.answerText}
          onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  questionStyle: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
