Node.js — Run our programs

IDE: Interactive Development Environment: we are using VS Code

Git

Interesting fact
JavaScript was created to transform static HTML pages into dynamic ones.

Topics covered so far

1. Installed Node.js
2. Installed VS Code
3. Git and GitHub accounts to learn version control
4. Created a project folder / repository
5. Created a GitHub repo
6. `console.log()` to print output
7. Variables
   - `let`, `const`, `var`
   - Primitive data types: string, number, boolean, undefined, null, symbol, bigint
   - Object: (to be covered)
8. Variable naming practice (camelCase and readability rules)
9. Variable declaration, modification, and reusability
10. Functions
11. Loops
    - if / else
    - for
    - while

Settings (to disable autocomplete for practice)

@id:editor.quickSuggestions @id:editor.suggestOnTriggerCharacters @id:editor.wordBasedSuggestions @id:editor.tabCompletion @id:javascript.suggest.enabled @id:typescript.suggest.enabled

Keep autocomplete OFF for better practice when learning.

Notes and key definitions

- Git: version control system.
- GitHub: hosting/service for repositories, issues, PRs, reviews, and CI integrations.
- Variables: used to store data in memory (a single container).
  - Why use variables? To reuse values in multiple places and change them in one place — improves reusability and maintainability.

Without variables, you would need to type values (e.g., an email ID) multiple times and update everywhere when it changes. That makes maintenance hard.

Quotes and learning statements

- The expert in anything was once a beginner.
- Reusability and maintainability are essential.
- If you need to copy-paste code, something is wrong — it will be harder to maintain.
- Writing a program is communication.
- Use functions to follow the DRY (Don't Repeat Yourself) principle.

Status codes in API testing (common examples): 200, 201, 299, 400, 401, 404, 500

For interview questions, you often need loops and arrays together.

# Chapter: Variables

    Naming conventions
        1. Cannot start with a number.
        2. Cannot have spaces.
        3. Cannot use special characters except `_` and `$`.
        4. Cannot use reserved keywords like `let`, `var`, `if`, `else`, `for`, `function`, etc.
        5. Use camelCase for multiple words (e.g., `firstName`, `lastName`, `searchBoxLocator`).
        6. Variable names are case sensitive (`firstname` and `FirstName` are different).
        7. Use meaningful names (e.g., `firstName` better than `fn` or `name1`).
        8. Avoid single-letter names except for counters like `i`, `j` in loops.
        9. Use lowercase for single-word variables like `email`, `age`, `country`.
        10. Avoid using underscores in variable names except for constants like `MAX_VALUE`.
        11. Use `const` for variables whose values will not change.
        12. `snake_case` is not preferred in JavaScript but, if used, use lowercase (e.g., `first_name`).

    Mistakes to avoid
        1. Don't use `var`; prefer `let` and `const` (var is function-scoped and can cause bugs).
        2. Don't use a variable before declaring it.
        3. Don't put quotes around variable names — that makes them strings.
        4. Don't declare the same variable multiple times with `let` (it causes an error).
    
    Summary: variables store data for reusability and better code management.

    Points to remember
        - Scope is within the curly braces of a block.
        - When declared with `let` inside a block (function, loop, if/else), it remains only in that block.
        - JavaScript is dynamically typed — a variable's data type can change at runtime.

    Data types
- Primitive: string, number, boolean, undefined, null, symbol, bigint
- Non-primitive: object, array, function
- In JavaScript, many things are objects except primitive values.
- Data types matter for correct operations and clearer code.
  - Example: arithmetic on strings results in concatenation.

QA domain examples

- string: username, password, validation messages
- number: test case id, execution time, counts

Operators

- Operators can behave differently based on data types.
- Use explicit type conversion when needed.

Unary and compound operators

- `count += 5` (compound assignment)
- `++count` (increment then use)
- `count++` (use then increment)

Comparison operators

- `=` -> assignment
- `==` -> compares value only (e.g., `5 == "5"` is true)
- `===` -> compares value and type (e.g., `5 === "5"` is false)
- Relational: `<`, `>`, `<=`, `>=`
- Logical: `&&` (and), `||` (or), `!` (not)

Chapter: Loops

IF / Else

- `if` / `else` statements perform conditional operations.
- Multiple `else if` clauses are allowed; only one `else` block is allowed at the end.
- Only the first true condition executes; order matters.
- Use `{}` for blocks — even for single statements it's clearer to include them.
- Nested `if` / `else` is allowed for complex logic.

Truthy and falsy values

- Falsy: `""` (empty string), `0`, `null`, `undefined`, `NaN`, `false`
- Truthy: non-zero numbers, non-empty strings, objects, arrays

Practical examples / assignments

- Grading system
- Email validation
- Username & password validation

Switch case

- Use `switch` for multiple discrete values; include `break` to prevent fall-through.

For loop

- (Add example snippets here as practice.)





