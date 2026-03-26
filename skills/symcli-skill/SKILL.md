---
name: symcli-skill
description: Performs symbolic math computation, tensor optimization, and C# math/security analysis. Use when the user needs exact mathematical results, GPU-style tensor fusion rules, or deterministic code analysis to prevent LLM hallucinations.
license: MIT
compatibility: Requires .NET 10.0 or higher
metadata:
  author: Wowo51
  version: "1.0"
---

# SymCLI

SymCLI is a high-performance symbolic computation engine designed to act as an exact mathematical "System 2" engine for AI agents.

## When to Use

- User asks to solve complex equations (algebraic, differential, linear).
- User needs to optimize tensor expression graphs (fusion, factoring, scale folding).
- User wants to analyze C# code for mathematical hazards or security vulnerabilities.
- Precise, deterministic results are required to avoid LLM hallucinations.

## Usage

```bash
# Solving a ProblemScript (.ps)
symcli.bat <input.ps> <output.txt>

# Analyzing C# code
symcli.bat analyze csharp-math <input-path> <output-report> [options]
```

## Examples

### Algebraic Equation
Input `problem.ps`:
```xml
<Options>Target: x</Options>
x^2 - 5*x + 6 = 0
```
Output: `x = 2, x = 3`

### Tensor Optimization
Input `tensor.ps`:
```xml
<Options>RulePacks: Tensor</Options>
MatMul(A, MatMul(B, C)) # Re-associates based on FLOP cost
```

## Edge Cases

- **Division by zero**: Returns symbolic `Infinity` or `Undefined` depending on context.
- **Complex Roots**: Supported in algebraic rulepacks.
- **Unsolvable Equations**: Returns the original expression in simplified form.
