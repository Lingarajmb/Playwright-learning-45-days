// Next Topic — Merge and Conflicts
// Exact repository folder:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 03 - Merge - and - Rebase/

// For this chapter, we'll use the first file:
// 01 - Merge - and - Conflicts.js

// Concept 1 — What is Git Merge?
// We'll start with only this concept.
// A merge is used to combine changes from one branch into another branch.
// Example:
// main
//   \
//    feature/login-automation

// You complete your Playwright login automation.
// You switch to main:
// git switch main

// Then merge the feature branch:
// git merge feature/login-automation

// Conceptually:
// feature/login-automation
//           │
//           │ git merge
//           ▼
//         main

// The purpose is to bring the completed feature changes into the target branch.
// Real Playwright example
// main
//   \
//    feature/login-automation
//         ↓
//    login.spec.js
//         ↓
//       commit
//         ↓
//    Pull Request / merge
//         ↓
//        main

// Later, we'll learn what happens when Git cannot automatically combine the changes — that's a merge conflict.
// For now, focus only on:
// Merge = combine changes from one branch into another branch.

// Practice — Concept 1
// Q1
// What is a Git merge?

// A Git merge is a command that combines changes from one branch into another branch.

// Q2
// You have:
// main
// feature/login-automation
// Your login automation is complete. Which branch should you normally switch to before merging the feature into main?

// You should switch to the main branch before merging the feature branch into it.

// Q3
// What does this command do?
// git merge feature/login-automation

// This command merges the changes from the feature/login-automation branch into the current branch (which should be main).

// Q4
// Why would a Playwright team merge a feature branch into main?

// A Playwright team would merge a feature branch into main to integrate completed features, ensuring that the main branch has the latest updates and functionality from the feature branch.

// Q5 — Scenario
// You are currently on:
// feature/login-automation
// Your Playwright login tests are complete, and you want to merge them into main.
// Write the two Git commands you would use.

// 1. Switch to the main branch:
// git switch main

// 2. Merge the feature branch:
// git merge feature/login-automation

// Send Q1–Q5, and I'll evaluate them individually. 💪


// //-------Validation---------------//

// Excellent, macha. 🔥 You understood the core merge concept correctly.
// Concept 1 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correct: merge combines changes from one branch into another.
// Q2	✅ Correct	1/1	Correct: switch to main before merging the feature into main.
// Q3	✅ Correct	1/1	Correctly explained that the feature branch is merged into the current branch.
// Q4	✅ Correct	1/1	Correct: merging integrates completed feature work into main.
// Q5	✅ Correct	1/1	Both commands are correct and in the correct order.


// 🎯 Score: 5/5 — 100% 🏆
// Your workflow is correct:
// git switch main
// git merge feature/login-automation

// The key rule to remember:
// The branch you are currently on is the branch that receives the merge.

// For example:
// Currently on main
//        ↓
// git merge feature/login-automation
//        ↓
// main receives the changes

// ✅ Concept 1 — COMPLETE
// Next we'll learn Concept 2 — What is a merge conflict and why does it happen?
// We'll use a Playwright test example so you can understand exactly how conflicts can occur.


//--------------------------------------------------------------------------------------------------------------------------------------------------------------


//********************************************************
// Concept 2 — What Is a Merge Conflict?
//********************************************************

// File:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 03 - Merge - and - Rebase/
//         └── 01 - Merge - and - Conflicts.js

// 1. What is a merge conflict?
// A merge conflict happens when Git cannot automatically combine changes from two branches.
// For example, suppose both branches modify the same part of the same file in different ways.
// main
//   │
//   └── login.spec.js
//        │
//        ├── Change A
//        │
// feature/login-automation
//        │
//        └── Change B

// If Git cannot determine which change should be kept, it reports a conflict.
// 2. Simple example
// Suppose main has:
// await page.getByRole('button', { name: 'Login' }).click();
// Your feature branch changes the same line to:
// await page.getByRole('button', { name: 'Sign In' }).click();
// At the same time, another developer changes that same line on main to:
// await page.getByRole('button', { name: 'Submit' }).click();
// When you try to merge the branches, Git may not know which version you intended.
// So Git reports a merge conflict.
// 3. Important point
// A merge conflict does not automatically mean your code is wrong.
// It means:
// Git needs a human to decide how the conflicting changes should be combined.

// You inspect the conflicting code and choose the correct resolution based on the intended behavior.
// 4. What Git shows during a conflict
// Git may mark the conflicting section like this:
// <<<<<<< HEAD
// await page.getByRole('button', { name: 'Submit' }).click();
// =======
// await page.getByRole('button', { name: 'Sign In' }).click();
// >>>>>>> feature/login-automation

// Conceptually:
// <<<<<<< HEAD
//     Current branch's version
// =======
//     Incoming branch's version
// >>>>>>> feature/login-automation

// These markers show you where the conflict exists.
// You then edit the file and decide what the final code should be.
// 5. Playwright example
// Imagine two developers modify the same login test.
// Developer A — main:
// await page.getByRole('button', { name: 'Submit' }).click();

// Developer B — feature/login-automation:
// await page.getByRole('button', { name: 'Sign In' }).click();

// When the feature branch is merged, Git may stop and say there is a conflict.
// The developer must inspect the login test and resolve it.
// For example, if the application's actual accessible name is now Sign In, the final code might be:
// await page.getByRole('button', { name: 'Sign In' }).click();

// Then the conflict is resolved.
// ⭐ Key concept
// Remember:
// Different changes
//       ↓
// Git can often merge automatically
//       ↓
// No conflict

// But:
// Conflicting changes
//       ↓
// Git cannot determine the intended result
//       ↓
// Merge conflict
//       ↓
// Human resolves it

// Most important sentence for interviews:
// A merge conflict occurs when Git cannot automatically reconcile conflicting changes from different branches, so a developer must manually resolve the conflict.

// Practice Set — Concept 2
// Answer without looking back. 😎
// Q1
// What is a merge conflict?
//->

// Q2
// Why can Git sometimes merge two branches automatically, but sometimes require manual resolution?
//



// Q3
// If two developers modify the same line of the same file differently, what can happen when their branches are merged?


// Q4
// Look at this:
// <<<<<<< HEAD
// await page.getByRole('button', { name: 'Submit' }).click();
// =======
// await page.getByRole('button', { name: 'Sign In' }).click();
// >>>>>>> feature/login-automation
// What do these conflict markers indicate?


// Q5 — Playwright scenario
// You are merging:
// feature/login-automation
// into:
// main
// Both branches changed the same Playwright login-test line differently.
// Git reports a merge conflict.
// What does this mean, and what should the developer do next?


// Send Q1–Q5, macha. 💪

///----Validation--------///

// Q1. What is a merge conflict?
// A merge conflict happens when Git tries to combine two branches but finds changes that clash — like both branches editing the same line of the same file differently. Git can't automatically decide which version to keep, so it stops and asks you to resolve it manually.

// Q2. Why can Git sometimes auto-merge, but sometimes needs manual resolution?
// Git can auto-merge when changes are in different parts of a file (or different files) — it just combines them. But if both branches changed the same lines, Git doesn't know which version is "correct," so it can't decide on its own and needs a human to choose.

// Q3. Two developers modify the same line differently — what happens on merge?
// Git flags it as a merge conflict. It won't pick one side automatically — it marks the conflicting section in the file and waits for a developer to manually choose (or combine) the correct version before continuing.

// Q4. What do these conflict markers mean?

// javascript
// <<<<<<< HEAD
// await page.getByRole('button', { name: 'Submit' }).click();
// =======
// await page.getByRole('button', { name: 'Sign In' }).click();
// >>>>>>> feature/login-automation
// <<<<<<< HEAD → start of your current branch's version of the code
// ======= → separator between the two conflicting versions
// >>>>>>> feature/login-automation → end marker, showing the incoming branch's version

// So the code between HEAD and ======= is what's currently in your branch, and the code between ======= and >>>>>>> is what's coming from feature/login-automation.

// Q5 — Playwright scenario
// It means both branches changed the exact same line of the login test differently, and Git can't decide which version is correct — so it flags a conflict instead of merging automatically.

// What the developer should do:

// Open the file and look at the conflict markers.
// Decide which version to keep (Submit or Sign In), or combine both if needed.
// Remove the conflict markers (<<<<<<<, =======, >>>>>>>) after resolving.
// Stage the resolved file: git add <file>
// Complete the merge with: git commit


// Excellent, macha. 🔥 This is a very strong answer set. You understand not only what a merge conflict is, but also how Git represents it and what the developer does afterward.
// Concept 2 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Clear definition: Git cannot automatically decide between conflicting changes.
// Q2	✅ Correct	1/1	Correct distinction between non-overlapping changes and conflicting changes.
// Q3	✅ Correct	1/1	Correct: Git flags the conflict and requires manual resolution.
// Q4	✅ Correct	1/1	Excellent explanation of HEAD, separator, and incoming branch markers.
// Q5	✅ Correct	1/1	Complete workflow: inspect → resolve → remove markers → git add → complete merge.


// 🎯 Score: 5/5 — 100% 🏆
// ⭐ Particularly strong point
// Your Q4 explanation is exactly right:
// <<<<<<< HEAD
// Current branch's version
// =======
// Incoming branch's version
// >>>>>>> feature/login-automation

// And your Q5 correctly included:
// git add <file>

// after resolving the conflict.
// One important distinction
// Don't think:
// "Git asks me to choose which branch is correct."

// Instead, think:
// Git asks the developer to decide what the final combined code should be.

// Sometimes that means keeping the current version, sometimes the incoming version, and sometimes combining parts of both.
// For example, the final Playwright code might be neither original version exactly.
// ✅ Concept 2 — COMPLETE
// Merge & Conflicts Progress
// - ✅ Concept 1 — Git Merge — 100%
// - ✅ Concept 2 — Merge Conflicts — 100%
// Next Concept 3
// Resolving a merge conflict step-by-step
// We'll practice the actual workflow:
// merge
//   ↓
// conflict
//   ↓
// inspect file
//   ↓
// edit code
//   ↓
// remove conflict markers
//   ↓
// git add
//   ↓
// git commit

// We'll do it with a realistic Playwright test conflict. 💪

//---------------------------------------------------------------------------------------------------------------------------

//************************************************8 */
// Concept 3 — Resolving a Merge Conflict Step-by-Step
//************************************************8 */

// File:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 03 - Merge - and - Rebase/
//         └── 01 - Merge - and - Conflicts.js

// We already know what a merge conflict is. Now let's learn the actual resolution workflow.
// 1. Start the merge
// Suppose you're on:
// main

// and want to merge:
// feature/login-automation

// Run:
// git merge feature/login-automation

// Git detects conflicting changes and reports a conflict.
// 2. Check which files have conflicts
// Run:
// git status

// You may see something like:
// both modified: tests/login.spec.js

// This tells you that login.spec.js needs to be resolved.
// 3. Open the conflicting file
// You might see:
// <<<<<<< HEAD
// await page.getByRole('button', { name: 'Submit' }).click();
// =======
// await page.getByRole('button', { name: 'Sign In' }).click();
// >>>>>>> feature/login-automation

// Git is showing you the two conflicting versions.
// 4. Decide the final code
// Suppose the application now uses Sign In.
// You decide the final Playwright code should be:
// await page.getByRole('button', { name: 'Sign In' }).click();

// You must remove all three conflict markers:
// <<<<<<< HEAD
// =======
// >>>>>>> feature/login-automation

// The file should contain only the valid final code.
// 5. Stage the resolved file
// After resolving the conflict:
// git add tests/login.spec.js

// This tells Git:
// "I have resolved this file."

// 6. Complete the merge
// Then create the merge commit:
// git commit

// Git may open an editor with a default merge commit message.
// You can also provide a message when appropriate:
// git commit -m "Resolve login automation merge conflict"

// Complete conflict-resolution workflow
// Remember this sequence:
// git merge feature/login-automation
//               ↓
//         Merge conflict
//               ↓
//           git status
//               ↓
//        Open conflicted file
//               ↓
//        Decide final code
//               ↓
//      Remove conflict markers
//               ↓
//           git add
//               ↓
//           git commit

// Very important
// git add does not resolve the conflict by itself.
// You first resolve the actual code conflict, then use:
// git add <file>

// to tell Git the file has been resolved.
// Playwright example
// Suppose the conflict is in:
// tests/login.spec.js

// After resolving:
// git add tests/login.spec.js
// git commit -m "Resolve login test merge conflict"

// Then your merge is completed.
// Practice Set — Concept 3
// Answer without looking back. 😎
// Q1
// You run:
// git merge feature/login-automation
// and Git reports a conflict.
// What command can you use to identify which files are involved in the conflict?

//-> //git status



// Q2
// You open:
// tests/login.spec.js
// and see:
// <<<<<<< HEAD
// Code A
// =======
// Code B
// >>>>>>> feature/login-automation
// What should you do with these markers?

//-> finalize the which version is correct and i will do git add

// Q3
// After deciding that Code B is the correct final code, what should the file contain?
// Should it contain:
// Code B
// or:
// <<<<<<< HEAD
// Code A
// =======
// Code B
// >>>>>>> feature/login-automation
// Explain why.


// -> should delete the Code A make final Code B as final then git add.




// Q4
// After manually resolving:
// tests/login.spec.js
// what Git command should you run to tell Git that the conflict has been resolved?

//git add


// Q5 — Complete scenario
// You are on main and run:
// git merge feature/login-automation
// Git reports a conflict in:
// tests/login.spec.js
// Explain the complete sequence of commands/actions you would perform from the moment the conflict appears until the merge is completed.


//-> git merge at this stage we'll get the merge confilct.
//git status - for in which file merge confilct came. then to file fix the issue
//git add test/login.spec.js - to save changes in staging
//git commit -m "fixed merge conflict" - to commit the fixed merge confilict to master



// Take your time with Q5. This is an important real-world interview scenario. 💪

//----validation---//

// Good attempt, macha. 👍 You understand the overall conflict-resolution flow, but Q2–Q4 need more precise answers, and Q5 has one small wording issue.
// Concept 3 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	git status identifies the conflicted files.
// Q2	⚠️ Partially correct	0.75/1	You should explicitly remove the conflict markers and keep/construct the correct final code.
// Q3	⚠️ Partially correct	0.75/1	Correct idea, but you should state that the final file should contain only Code B, with all conflict markers removed.
// Q4	⚠️ Partially correct	0.75/1	git add is correct, but the complete command should be git add tests/login.spec.js.
// Q5	✅ Mostly correct	0.9/1	Correct workflow. Small issue: the merge is completed into main, not necessarily "to master."


// 🎯 Score: 4.15/5 — 83%
// Let's fix the important details
// Q2 — Conflict markers
// Your answer:
// "finalize which version is correct and i will do git add"

// The missing step is editing the file.
// You should:
// 1. Decide the correct final code.
// 2. Remove:<<<<<<< HEAD
//    =======
//    >>>>>>> feature/login-automation
// 3. Leave valid final code.
// 4. Then stage it.
// Q3 — Final file
// If Code B is correct, the final file should be:
// Code B

// Not:
// <<<<<<< HEAD
// Code A
// =======
// Code B
// >>>>>>> feature/login-automation

// Those markers are temporary Git conflict markers and must be removed.
// Q4 — Stage the resolved file
// Instead of only:
// git add

// use:
// git add tests/login.spec.js

// This tells Git that this specific conflicted file has been resolved.
// Q5 — Correct complete workflow
// Your answer was fundamentally correct:
// git merge feature/login-automation
// git status

// Then manually open and resolve:
// tests/login.spec.js

// Remove the conflict markers and keep the correct final code.
// Then:
// git add tests/login.spec.js
// git commit -m "Resolve merge conflict"

// One wording correction: because the scenario says you're merging into main, say:
// "complete the merge into main"

// rather than "commit the conflict to master."
// ⭐ Interview-ready answer
// If an interviewer asks:
// "How do you resolve a Git merge conflict?"
// You can say:
// "First, I run git status to identify the conflicted files. Then I open the conflicted file, review both versions, and decide what the final code should be. I remove the Git conflict markers, save the resolved file, and run git add <file> to mark it as resolved. Finally, I commit the merge with git commit."

// That's a strong answer. 💪
// ✅ Concept 3 — COMPLETE
// You understand the workflow; the deductions were mainly for precision in the commands and terminology.
// Next: Concept 4 — Aborting a merge conflict with git merge --abort.


//-------------------------------------------------------------------------------------------------------------------------------------------



// Perfect, macha. 🔥
// //****************************************************** */
// Concept 4 — Aborting a Merge Conflict
// //****************************************************** */

// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 03 - Merge - and - Rebase/
//         └── 01 - Merge - and - Conflicts.js

// Sometimes you start a merge and encounter conflicts, but you realize you don't want to continue with the merge right now.
// In that situation, Git provides:
// git merge --abort

// 1. What does git merge --abort do?
// Suppose you're on:
// main

// and run:
// git merge feature/login-automation

// A conflict occurs.
// You decide:
// "I don't want to resolve this conflict right now. I want to cancel this merge."

// Run:
// git merge --abort

// Git attempts to return your working tree and index to the state they were in before the merge started.
// Conceptually:
// Before merge
//      ↓
// main
//      ↓
// git merge feature/login-automation
//      ↓
// CONFLICT
//      ↓
// git merge --abort
//      ↓
// Back to the pre-merge state

// 2. Why would you use it?
// Imagine you're working on a Playwright project and get a complicated conflict in:
// tests/login.spec.js
// tests/authentication.spec.js

// You realize you need to understand the changes before resolving them.
// Instead of manually trying to undo everything, you can abort the merge:
// git merge --abort

// Then you can investigate the changes and attempt the merge again later.
// 3. git merge --abort vs resolving the conflict
// These are two different paths.
// Path A — Resolve
// Merge
//  ↓
// Conflict
//  ↓
// Edit files
//  ↓
// Remove conflict markers
//  ↓
// git add
//  ↓
// git commit

// Path B — Cancel
// Merge
//  ↓
// Conflict
//  ↓
// git merge --abort
//  ↓
// Cancel merge

// So:
// Resolve = continue the merge.

// Abort = cancel the merge attempt.

// 4. Important distinction
// git merge --abort does not mean:
// "Delete my feature branch."

// It only aborts the current merge operation.
// Your branches still exist.
// For example:
// main
// feature/login-automation

// remain available after aborting the merge.
// Playwright example
// You are on:
// main

// You run:
// git merge feature/login-automation

// Git reports:
// CONFLICT (content): Merge conflict in tests/login.spec.js

// You don't want to resolve it yet.
// Run:
// git merge --abort

// The merge attempt is cancelled.
// You can later try again:
// git merge feature/login-automation

// when you're ready.
// Practice Set — Concept 4
// Answer without looking back. 😎
// Q1
// What does this command do?
// git merge --abort

// Q2
// When might a developer choose to use git merge --abort instead of resolving the conflict immediately?
// Q3
// Does:
// git merge --abort

// delete the feature branch?
// Explain.
// Q4
// You are on main and run:
// git merge feature/login-automation

// A conflict occurs in:
// tests/login.spec.js

// You decide you don't want to continue with the merge.
// What command should you use?
// Q5 — Real Playwright scenario
// You are merging a feature branch containing 20 Playwright test files into main. Git reports conflicts in several files, and you realize the feature branch needs to be reviewed before you attempt the merge again.
// Explain:
// 1. What you would do.
// 2. Which command you would use.
// 3. What happens to the merge attempt.
// 4. Whether the feature branch itself is deleted.
// Send Q1–Q5, macha. 💪

// Q1. What does git merge --abort do?
// It cancels an in-progress merge that has conflicts and restores your branch to the state it was in before you ran git merge — as if the merge never happened.

// Q2. When would a developer use git merge --abort?
// When the conflicts are too complex, too many, or need more thought/review before resolving — instead of fixing them under pressure, the developer backs out, investigates further (e.g., checks with the other developer or reviews the feature branch), and attempts the merge again later.

// Q3. Does git merge --abort delete the feature branch?
// No. It only cancels the current merge attempt on your current branch (e.g., main). The feature branch (feature/login-automation) is untouched — it still exists with all its commits, exactly as before.

// Q4. You're on main, merge conflict occurs, you want to stop — what command?

// bash
// git merge --abort

// Q5 — Real Playwright scenario

// 1. What you'd do:
// Since there are conflicts across several test files and the feature branch itself needs review before merging, you back out of the merge entirely rather than resolving conflicts file-by-file right now.

// 2. Command:

// bash
// git merge --abort

// 3. What happens to the merge attempt:
// The merge is completely cancelled. Your main branch returns to exactly the state it was in before you ran git merge — no conflict markers, no partial changes, nothing staged.

// 4. Is the feature branch deleted?
// No. feature/login-automation and all 20 test files on it remain completely intact. Only the merge attempt into main is undone — the feature branch itself isn't touched, so it can be reviewed and merged again later.


// ///------validation------------////
// Excellent, macha. 🔥 This is a perfect answer set.
// Concept 4 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correctly explained that the in-progress merge is cancelled and the pre-merge state is restored.
// Q2	✅ Correct	1/1	Good real-world reasoning: back out, review, then attempt the merge again.
// Q3	✅ Correct	1/1	Exactly right. The feature branch and its commits remain untouched.
// Q4	✅ Correct	1/1	Correct command: git merge --abort.
// Q5	✅ Excellent	1/1	Complete explanation of the action, command, result, and effect on the feature branch.


// 🎯 Score: 5/5 — 100% 🏆
// Your Q5 is particularly strong because you clearly separated:
// Merge attempt
//      ↓
//    ABORT
//      ↓
// main returns to pre-merge state

// from:
// feature/login-automation
//      ↓
// NOT deleted
//      ↓
// commits remain intact

// That's exactly the distinction you need to remember.
// ⭐ Interview-ready answer
// If asked:
// "What would you do if you encounter a merge conflict that you don't want to resolve right now?"
// You can say:
// "If I don't want to continue with the merge, I can use git merge --abort. It cancels the current merge attempt and restores the branch to its pre-merge state. It doesn't delete the feature branch or its commits."

// ✅ Concept 4 — COMPLETE
// Merge & Conflicts Progress
// - ✅ Concept 1 — Git Merge — 100%
// - ✅ Concept 2 — Merge Conflicts — 100%
// - ✅ Concept 3 — Resolving Conflicts — 83%
// - ✅ Concept 4 — git merge --abort — 100%
// Next Concept 5: Merge conflict resolution strategies and best practices — including how to reduce conflicts in a real Playwright team workflow. 💪

//----------------------------------------------------------------------------------------------------------------------------------------------------

//************************************************************** */

// Perfect, macha. 🔥
// Concept 5 — Merge Conflict Prevention & Best Practices
// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 03 - Merge - and - Rebase/
//         └── 01 - Merge - and - Conflicts.js

// The goal here is not just knowing how to fix conflicts, but understanding how a team can reduce the chance of conflicts in the first place.
// 1. Keep branches focused
// Suppose you're working on:
// feature/login-automation

// Try to keep that branch focused on the login automation work.
// Avoid mixing unrelated changes such as:
// Login automation
// +
// Database changes
// +
// Payment tests
// +
// Configuration changes

// in the same feature branch unless they are actually related.
// A focused branch is easier to review and merge.
// 2. Keep commits focused
// Instead of one huge commit:
// Add everything

// use meaningful commits such as:
// git commit -m "Add login test cases"

// and:
// git commit -m "Add login validation"

// This makes the history easier to understand and review.
// 3. Keep your branch updated
// If other developers are frequently changing main, your feature branch can become outdated.
// For example:
// main
//   ├── Developer A changes
//   ├── Developer B changes
//   └── Your branch was created earlier

// The longer your branch stays separated from the latest main, the more likely you may encounter conflicts when eventually integrating the changes.
// So teams often keep their feature branches reasonably up to date according to their team's workflow.
// 4. Communicate when modifying shared files
// This is especially useful in a Playwright project.
// Imagine two developers are both heavily modifying:
// tests/login.spec.js

// at the same time.
// That increases the possibility of conflicting changes.
// If you know another developer is working on the same file, communicating with them can help avoid unnecessary overlapping work.
// 5. Don't blindly choose "ours" or "theirs"
// When resolving a conflict, don't simply choose:
// Accept Current

// or:
// Accept Incoming

// without understanding the changes.
// Instead:
// Conflict
//    ↓
// Understand both changes
//    ↓
// Determine intended behavior
//    ↓
// Create correct final code

// For a Playwright test, you should verify that the resulting test still represents the intended behavior.
// 6. Run tests after resolving conflicts
// This is particularly important for your Playwright work.
// Suppose you resolve:
// tests/login.spec.js

// The conflict is gone, but the final code could still contain a logical problem.
// So after resolving:
// Resolve conflict
//       ↓
// git add
//       ↓
// Complete merge
//       ↓
// Run Playwright tests
//       ↓
// Verify behavior

// For example:
// npx playwright test

// The exact test command can depend on the project's configuration and scripts.
// ⭐ Practical team workflow
// A simplified workflow is:
// Create focused feature branch
//           ↓
// Develop Playwright tests
//           ↓
// Make focused commits
//           ↓
// Keep branch reasonably updated
//           ↓
// Push
//           ↓
// Pull Request
//           ↓
// Review
//           ↓
// Resolve conflicts if needed
//           ↓
// Run tests
//           ↓
// Merge

// Important mindset
// A merge conflict isn't just a Git problem.
// Sometimes it represents a real code/design decision.
// For example:
// Developer A:
// Change login button behavior

// Developer B:
// Change login button locator

// The developer resolving the conflict needs to understand whether both changes should remain, whether one replaces the other, or whether they need to be combined.
// Practice Set — Concept 5
// Answer in your own words. 😎
// Q1
// Why is it useful to keep a feature branch focused on one feature or task?
// Q2
// How can making small, focused commits help when working with Git branches?
// Q3
// Why can keeping a feature branch outdated for a long time increase the chance of merge conflicts?
// Q4 — Playwright scenario
// Two developers are both making major changes to:
// tests/login.spec.js

// on different branches.
// What could happen when their branches are merged, and what could the developers do to reduce unnecessary conflicts?
// Q5 — Real-world scenario
// You resolved a merge conflict in:
// tests/login.spec.js

// You removed the conflict markers and ran:
// git add tests/login.spec.js

// The merge is completed.
// Why should you still run the Playwright tests afterward?
// Explain what could still be wrong even though Git considers the conflict resolved.
// Send Q1–Q5, macha. 💪

// Q1. Why keep a feature branch focused on one feature/task?
// It makes the branch's purpose clear, keeps changes small and isolated, and makes it much easier to review, test, and merge. If a branch touches many unrelated things, it becomes harder to understand what changed and more likely to clash with other people's work.

// Q2. How do small, focused commits help with branches?
// They make it easier to track exactly what changed and why, make code reviews simpler, and if something breaks, it's much easier to find the specific commit that caused it. They also make conflicts easier to resolve, since each commit only touches a small, clear piece of code instead of bundling many unrelated changes together.

// Q3. Why does an outdated feature branch increase conflict risk?
// The longer a branch stays outdated, the more main changes without that branch knowing about it. Meanwhile the feature branch keeps diverging further and further away. When you finally merge, there's a much bigger gap between the two versions, increasing the chance that the same files/lines were touched differently by both sides.

// Q4 — Playwright scenario
// Since both developers are making major changes to the same file (tests/login.spec.js), merging their branches will likely cause multiple conflicts — possibly on overlapping lines where both rewrote similar logic.

// To reduce unnecessary conflicts, they could:

// Communicate early about who's touching that file and split the work if possible
// Keep their branches updated frequently (pull/merge main into their branch regularly) instead of waiting until the end
// Make smaller, more frequent commits/PRs instead of one large change, so conflicts are smaller and easier to resolve
// Split the file into smaller, more focused files if it keeps becoming a conflict hotspot

// Q5 — Real-world scenario
// Even though Git considers the conflict "resolved" once you remove the markers and run git add, Git only checks that the file has no leftover conflict syntax — it has no idea whether the resulting code is actually correct or functional.

// What could still be wrong:

// The combined code might be syntactically valid but logically broken (e.g., you kept the wrong button locator, or merged two login flows incorrectly)
// A function or variable referenced by one side might no longer exist if you accidentally removed it
// The "correct" choice might not fully match how the rest of the test suite expects the login flow to behave

// That's why running the Playwright tests afterward is essential — it verifies the resolved code actually works in practice, not just that it looks syntactically clean to Git.


///-------validations-----------////


// Excellent, macha. 🔥 This is a very strong set of answers.
// Concept 5 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Clearly explained why focused branches are easier to review, test, and merge.
// Q2	✅ Correct	1/1	Strong explanation of traceability, review, debugging, and smaller changes.
// Q3	✅ Correct	1/1	Correctly explained branch divergence and increased conflict risk.
// Q4	✅ Excellent	1/1	You identified the conflict risk and gave several practical prevention strategies.
// Q5	✅ Excellent	1/1	Excellent distinction between Git resolving the conflict and the application/test being functionally correct.


// 🎯 Score: 5/5 — 100% 🏆
// Your Q5 is especially strong:
// "Git only checks that the file has no leftover conflict syntax — it has no idea whether the resulting code is actually correct or functional."

// That's exactly the important idea.
// And this is a very good Playwright-specific point:
// "running the Playwright tests afterward is essential — it verifies the resolved code actually works in practice."

// ✅ Concept 5 — COMPLETE
// Merge & Conflicts Progress
// - ✅ Concept 1 — Git Merge — 100%
// - ✅ Concept 2 — Merge Conflicts — 100%
// - ✅ Concept 3 — Resolving Conflicts — 83%
// - ✅ Concept 4 — git merge --abort — 100%
// - ✅ Concept 5 — Conflict Prevention & Best Practices — 100%
// You now understand the complete basic merge/conflict workflow:
// Create branch
//      ↓
// Develop
//      ↓
// Commit
//      ↓
// Merge
//      ↓
//  ┌───────────────┐
//  │ Conflict?     │
//  └───────┬───────┘
//      No  │  Yes
//          │
//          ▼
//     Resolve OR Abort
//          ↓
//        git add
//          ↓
//        git commit
//          ↓
//    Run Playwright tests

// Next tracker topic
// The tracker places Module 3 → Chapter 4 — GitHub and Pull Requests after the current merge/conflicts topic, with Pull requests and code review — P0 CRITICAL. Playwright_Automation_with_Java…
// So next we'll move to:
// GitHub & Pull Requests → Concept 1: What is a Pull Request (PR)?
// We'll continue one concept at a time. 💪


////-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//*************************************************** */
