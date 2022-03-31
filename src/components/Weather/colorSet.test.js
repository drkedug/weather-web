import { render, screen } from '@testing-library/react';
import { colorSet } from './colorSet';

test('renders correct color at 2:00', () => {
  const colors = colorSet(2);
  expect(colors).toEqual(["0D043B", "300A56"])
});

test('renders correct color at 3:00', () => {
  const colors = colorSet(3);
  expect(colors).toEqual(["300A56", "0D043B"])
});

test('renders correct color at 4:00', () => {
  const colors = colorSet(4);
  expect(colors).toEqual(["6B1BBD", "300A56"])
});

test('renders correct color at 5:00', () => {
  const colors = colorSet(5);
  expect(colors).toEqual(["9E3FFF", "6B1BBD"])
});

test('renders correct color at 6:00', () => {
  const colors = colorSet(6);
  expect(colors).toEqual(["D2A6FF", "FF7D23"])
});

test('renders correct color at 7:00', () => {
  const colors = colorSet(7);
  expect(colors).toEqual(["8DBCCB", "FF7D23"])
});

test('renders correct color at 8:00', () => {
  const colors = colorSet(8);
  expect(colors).toEqual(["8DBCCB", "E8FAFF"])
});

test('renders correct color at 9:00', () => {
  const colors = colorSet(9);
  expect(colors).toEqual(["8DBCCB", "E8FAFF"])
});

test('renders correct color at 16:00', () => {
  const colors = colorSet(16);
  expect(colors).toEqual(["8DBCCB", "E8FAFF"])
});

test('renders correct color at 17:00', () => {
  const colors = colorSet(17);
  expect(colors).toEqual(["FF7D23", "8DBCCB"])
});

test('renders correct color at 18:00', () => {
  const colors = colorSet(18);
  expect(colors).toEqual(["D2A6FF", "FF7D23"])
});

test('renders correct color at 19:00', () => {
  const colors = colorSet(19);
  expect(colors).toEqual(["9E3FFF", "D2A6FF"])
});

test('renders correct color at 20:00', () => {
  const colors = colorSet(20);
  expect(colors).toEqual(["6B1BBD", "9E3FFF"])
});

test('renders correct color at 21:00', () => {
  const colors = colorSet(21);
  expect(colors).toEqual(["300A56", "6B1BBD"])
});

test('renders correct color at 22:00', () => {
  const colors = colorSet(22);
  expect(colors).toEqual(["0D043B", "300A56"])
});