// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number
test('Valid phone numbers', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Valid phone numbers', () => {
  expect(isPhoneNumber('321-456-7890')).toBe(true);
});
test('Not valid phone numbers - missing hyphens', () => {
  expect(isPhoneNumber('1234567890')).toBe(true);
});
test('Not valid phone number -  too short', () => {
  expect(isPhoneNumber('1123')).toBe(true);
});

// Email
test('Valid email - example 1', () => {
  expect(isEmail('john123@gmail.com')).toBe(true);
});
test('Valid email - example 2', () => {
  expect(isEmail('testemail@domain.org')).toBe(true);
});
test('Invalid email - missing domain', () => {
  expect(isEmail('john123@')).toBe(true);
});
test('Invalid email - missing symbol', () => {
  expect(isEmail('aaaaatrue')).toBe(true);
});

// Strong Password
test('Valid strong password - example 1', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});
test('Valid strong password - example 2', () => {
  expect(isStrongPassword('A_veryGood1')).toBe(true);
});
test('Invalid strong password - too short', () => {
  expect(isStrongPassword('Ab1')).toBe(true);
});
test('Invalid strong password - invalid characters', () => {
  expect(isStrongPassword('1234!@#$')).toBe(true);
});

// Date
test('Valid date - example 1', () => {
  expect(isDate('12/25/2025')).toBe(true);
});
test('Valid date - example 2', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('Invalid date - wrong format', () => {
  expect(isDate('2025-12-25')).toBe(true);
});
test('Invalid date - missing year', () => {
  expect(isDate('12/25')).toBe(true);
});

// Hex Color
test('Valid hex color - example 1', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('Valid hex color - example 2', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('Invalid hex color - too short', () => {
  expect(isHexColor('#FF')).toBe(true);
});
test('Invalid hex color - invalid characters', () => {
  expect(isHexColor('#12345G')).toBe(true);
});