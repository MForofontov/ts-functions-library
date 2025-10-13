#!/bin/bash

echo "Functions missing unit tests:"
echo "=============================="
echo ""

missing_count=0

# Array functions
for file in arrayFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/arrayFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ arrayFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Async functions
for file in asyncFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/asyncFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ asyncFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Date functions
for file in dateFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/dateFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ dateFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Encoding functions
for file in encodingFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/encodingFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ encodingFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - algebra
for file in mathFunctions/algebraFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/algebraFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/algebraFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - arithmetic
for file in mathFunctions/arithmeticFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/arithmeticFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/arithmeticFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - combinatorics
for file in mathFunctions/combinatoricsFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/combinatoricsFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/combinatoricsFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - geometric
for file in mathFunctions/geometricFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/geometricFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/geometricFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - number theory
for file in mathFunctions/numberTheoryFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/numberTheoryFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/numberTheoryFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - sequences
for file in mathFunctions/sequenceFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/sequenceFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/sequenceFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - statistics central tendency
for file in mathFunctions/statisticsFunctions/centralTendency/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/statisticsFunctions/centralTendency/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/statisticsFunctions/centralTendency/${basename}.ts"
    ((missing_count++))
  fi
done

# Math functions - statistics dispersion
for file in mathFunctions/statisticsFunctions/dispersion/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/mathFunctions/statisticsFunctions/dispersion/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ mathFunctions/statisticsFunctions/dispersion/${basename}.ts"
    ((missing_count++))
  fi
done

# Object functions
for file in objectFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/objectFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ objectFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# String functions
for file in stringFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/stringFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ stringFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Utility functions
for file in utilityFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/utilityFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ utilityFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Validation functions
for file in validationFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/validationFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ validationFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

# Network functions
for file in networkFunctions/*.ts; do
  basename=$(basename "$file" .ts)
  testfile="functionsUnittests/networkFunctions/${basename}.test.ts"
  if [ ! -f "$testfile" ]; then
    echo "❌ networkFunctions/${basename}.ts"
    ((missing_count++))
  fi
done

echo ""
echo "=============================="
echo "Total functions missing tests: $missing_count"
