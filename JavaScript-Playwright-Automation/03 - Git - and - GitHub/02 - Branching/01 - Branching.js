// Perfect, macha. 🔥 Let's start Chapter 2 — Branching, one concept at a time.
// Concept 1 — What is a Git Branch?
// A Git branch is a separate line of development that lets you work on changes without directly changing the main line of development.
// Think of your Playwright project like this:
// main
//  │
//  ├── existing framework
//  │
//  └── your new work

// Instead of making your changes directly on main, you can create a separate branch:
// main
//  │
//  ├── existing framework
//  │
//  └── feature/login-automation
//         ↓
//      your changes

// Why do we use branches?
// In a real Playwright automation project, multiple people may work on different tasks at the same time.
// For example:
// main
//  │
//  ├── feature/login-test
//  │
//  ├── feature/payment-test
//  │
//  └── bugfix/checkout-test

// Each developer can work on their own branch without directly changing main.
// Simple example
// Suppose you're asked:
// "Add Playwright automation for the login functionality."

// Instead of working directly on main, you could create:
// feature/login-automation

// Then work on:
// tests/login.spec.js
// pages/LoginPage.js

// Your changes stay on your feature branch until they're ready to be integrated into the main branch.
// The important idea 🧠
// Branch
//   ↓
// Separate line of development
//   ↓
// Work independently
//   ↓
// Later integrate the changes

// Branch ≠ separate repository
// A branch is not a completely separate Git repository.
// It's a separate line of development inside the same repository.
// 🎭 Playwright relevance
// In a real automation team:
// main
//  │
//  ├── feature/login-tests
//  ├── feature/search-tests
//  └── bugfix/checkout

// You might work on:
// feature/login-tests

// while another tester works on:
// feature/search-tests

// Both are working in the same Git repository but on separate branches.
// 🧠 Practice — Git Branch Basics
// Answer without looking up the answers:
// Q1. What is a Git branch?
//-> A Git branch is a separate line of development that allows developers to work on changes independently without affecting the main line of development. It enables multiple developers to work on different features or fixes simultaneously within the same repository.

// Q2. Why do developers use branches instead of always working directly on main?
//-> Developers use branches to isolate their changes, allowing them to work on new features or bug fixes without disrupting the main development line. This promotes a more stable main branch and enables parallel development.

// Q3. Is a Git branch a completely separate Git repository? Explain.
//-> No, a Git branch is not a completely separate Git repository. It is a separate line of development within the same repository, sharing the same history and files.

// Q4. You are asked to create Playwright automation for the login feature. Why might you create a branch such as:
// feature/login-automation
// instead of working directly on main?
//-> Creating a branch like feature/login-automation allows you to work on the login feature independently without affecting the main branch. This way, you can develop, test, and refine your changes before merging them into main, ensuring that the main branch remains stable and functional.

// Q5. In simple words, what does this represent?
// main
//  ├── feature/login-automation
//  └── feature/payment-automation

//-> This represents a Git repository where the main branch is the primary line of development, and there are two separate branches, feature/login-automation and feature/payment-automation, allowing developers to work on different features independently without interfering with each other or the main branch.


// Send me Q1–Q5, macha. 💪


//-----validations----------//

// xcellent, macha. 💪 Your answers show that you understand the Git branching concept, not just memorized definitions.
// Concept 1 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Clearly explained branch as a separate line of development.
// Q2	✅ Correct	1/1	Correctly explained isolation, stability of main, and parallel development.
// Q3	✅ Correct	1/1	Correct: branch belongs to the same repository and shares history/files.
// Q4	✅ Correct	1/1	Good Playwright-specific explanation. You correctly mentioned developing/testing before merging.
// Q5	✅ Correct	1/1	Correctly interpreted the branch structure.


// 🎯 Score: 5/5 — 100%
// Small English improvement
// Your Q5 sentence:
// "This represents a Git repository where the main branch is the primary line of development..."

// A slightly more natural interview-style version:
// "This represents a Git repository with main as the primary development branch, along with two feature branches: feature/login-automation and feature/payment-automation. Each feature can be developed independently and later merged into main."

// Your technical explanation was already correct.
// ✅ Concept 1 — COMPLETE
// Next, we move to Concept 2 — Creating and switching branches.
// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// We'll cover one concept at a time.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------


//*************************************************************8 */

// Perfect, macha. 👍
// Concept 2 — Creating and Switching Branches
// File:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// 1. Creating a new branch
// The command is:
// git branch feature/login-automation

// This creates the branch, but it does not switch you to that branch.
// For example:
// main
//  └── feature/login-automation

// The branch now exists, but you are still on main.
// 2. Switching to a branch
// Use:
// git switch feature/login-automation

// Now you are working on:
// feature/login-automation

// You can verify your current branch with:
// git branch

// The * indicates your current branch:
// * feature/login-automation
//   main

// 3. Create + switch in one command
// Instead of using two commands:
// git branch feature/login-automation
// git switch feature/login-automation

// you can do both at once:
// git switch -c feature/login-automation

// -c means create a new branch and switch to it.
// This is very commonly used.
// 4. Playwright example
// Suppose your team has:
// main

// You need to automate the login feature.
// You can create:
// git switch -c feature/login-automation

// Then your work happens on:
// feature/login-automation

// You can create your Playwright tests:
// tests/
// └── login.spec.js

// Your changes stay on the feature branch until you eventually merge them into main.
// Important distinction
// Remember this:
// git branch <branch-name>

// ➡️ Create only
// git switch <branch-name>

// ➡️ Switch only
// git switch -c <branch-name>

// ➡️ Create + switch
// One important rule
// Creating a branch does not automatically move you to it.
// Practice Set — Concept 2
// Answer these without looking back at the explanation. 😎
// Q1
// What does this command do?
// git branch feature/payment-automation

//-> This command creates a new branch called feature/payment-automation, but it does not switch to that branch. You remain on your current branch after executing this command.

// Q2
// You created a branch using:
// git branch feature/login-automation
// Are you automatically switched to feature/login-automation? Explain.
//-> No, you are not automatically switched to feature/login-automation. The git branch command only creates the branch, but it does not change your current working branch. You would need to use git switch feature/login-automation to switch to that branch.



// Q3
// What command would you use to switch to an existing branch called:
// feature/login-automation

//-> You would use the command git switch feature/login-automation to switch to the existing branch called feature/login-automation.

// Q4
// What is the difference between:
// git branch feature/login-automation
// and
// git switch -c feature/login-automation

//-> The command git branch feature/login-automation creates a new branch called feature/login-automation but does not switch to it, while git switch -c feature/login-automation both creates the new branch and switches to it immediately. The -c flag in the second command stands for "create and switch."

// Q5 — Playwright scenario
// You are currently on:
// main
// You need to create a new branch called:
// feature/login-tests
// and immediately start working on it.
// Write the Git command you would use.

//-> You would use the command git switch -c feature/login-tests to create the new branch called feature/login-tests and immediately switch to it for work.


// Send your Q1–Q5 answers, and I'll evaluate them individually and score you. 💪


//-----validations----------//

// Excellent, macha. 🔥 You corrected Q1, so now the complete set is perfect.
// Concept 2 — Final Evaluation
// Question	Result	Score
// Q1	✅ Correct	1/1
// Q2	✅ Correct	1/1
// Q3	✅ Correct	1/1
// Q4	✅ Correct	1/1
// Q5	✅ Correct	1/1


// 🎯 Final Score: 5/5 — 100% 🏆
// You clearly understand:
// git branch <name>
//         ↓
// Create branch only

// git switch <name>
//         ↓
// Switch to existing branch

// git switch -c <name>
//         ↓
// Create + switch

// Your Q4 explanation was particularly good because you explained the difference between the commands, rather than just stating their syntax.
// ✅ Concept 2 — COMPLETE
// Next:
// Concept 3 — Checking and Listing Branches
// We will cover:
// - git branch
// - Understanding the *
// - Identifying your current branch
// - Listing local branches
// - Playwright workflow example
// Then you'll get a practice set before we move to the next concept. 💪


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//**************************************************************8 */

// Perfect, macha. 👍
// Concept 3 — Checking and Listing Branches
//*************************************************************** */

// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// 1. git branch
// The command:
// git branch

// shows the local branches in your repository.
// Example:
// * main
//   feature/login-automation
//   feature/payment-automation

// The * tells you which branch you are currently on.
// Here:
// * main

// means you are currently working on main.
// 2. Example after switching
// Suppose you run:
// git switch feature/login-automation

// Then:
// git branch

// might show:
//   main
// * feature/login-automation
//   feature/payment-automation

// Now the * has moved to:
// feature/login-automation

// That means your current branch is feature/login-automation.
// 3. Why this is useful in Playwright
// Imagine your repository has:
// main
// feature/login-automation
// feature/payment-automation
// bugfix/login-timeout

// Before you start modifying Playwright tests, you can run:
// git branch

// and confirm that you are working on the correct branch.
// This is especially useful because accidentally making changes on main instead of your feature branch can create unwanted changes in the main development line.
// Important rule
// Remember:
// git branch

// ➡️ Lists your local branches and shows your current branch with *.
// It does not create a branch.
// It does not switch branches.
// Practice Set — Concept 3
// Answer these without looking back. 😎
// Q1
// What does this command do?
// git branch

//-> The command git branch lists all the local branches in your Git repository and indicates the current branch with an asterisk (*). It does not create or switch branches; it only displays the existing branches and highlights which one you are currently on.


// Q2
// What does the * mean in this output?
//   main
// * feature/login-automation
//   feature/payment-automation

//-> The asterisk (*) indicates that the current branch you are working on is feature/login-automation. It shows which branch is currently checked out and active in your working directory.

// Q3
// Based on this output:
//   main
//   feature/login-automation
// * feature/payment-automation
// Which branch are you currently working on?

//-> You are currently working on the feature/payment-automation branch, as indicated by the asterisk (*) next to it in the output of the git branch command.

// Q4
// You are about to start writing Playwright tests for the payment feature. You want to verify which branch you are currently on.
// Which Git command would you run?

//-> You would run the command git branch to list all local branches and see which one is currently active, indicated by the asterisk (*). This will help you confirm that you are on the correct branch before starting your work on the payment feature.

// Q5 — Scenario
// You run:
// git branch
// and get:
//   main
// * feature/login-automation
//   feature/payment-automation
// You intended to work on feature/payment-automation.
// Are you currently on the correct branch? What should you do?

//-> No, you are not on the correct branch. You are currently on feature/login-automation, as indicated by the asterisk (*). To switch to the intended branch, you should run the command git switch feature/payment-automation to change to the correct branch before starting your work on the payment feature.

// Send Q1–Q5, and I'll evaluate each one and give you the score. 💪

// //-----validations----------//

// Good work, macha. 🔥 You got the core branching behavior right. There is just one unanswered question.
// Concept 3 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correctly explained that git branch lists local branches and marks the current branch with *.
// Q2	✅ Correct	1/1	Correct. * identifies the currently active branch.
// Q3	✅ Correct	1/1	Correct: feature/payment-automation.
// Q4	⚠️ Not answered	0/1	The answer is git branch.
// Q5	✅ Correct	1/1	Correct. You identified the wrong branch and gave the correct switch command.


// 🎯 Score: 4/5 — 80%
// The only issue is Q4 was skipped, not a conceptual mistake.
// Q4 Correct Answer
// git branch

// This lets you see the local branches and the * tells you which branch you're currently on.
// Quick interview-ready summary
// git branch
//     ↓
// List local branches

// *
//     ↓
// Current branch

// git switch <branch-name>
//     ↓
// Switch to an existing branch

// ✅ Concept 3 — COMPLETE
// You understand the concept. We don't need to repeat it because Q4 was simply unanswered.
// Next Concept 4: deleting a branch and understanding when/why a feature branch is removed after merging.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//*************************************************************

// Perfect, macha. 👍 Let's continue.
// Concept 4 — Deleting a Git Branch

//****************************************************************

// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// 1. Why delete a branch?
// Suppose you created:
// feature/login-automation

// You completed the Playwright login automation and merged the changes into main.
// After the feature branch has served its purpose, a team may delete it to keep the repository clean.
// Typical workflow:
// Create branch
//      ↓
// Develop feature
//      ↓
// Test
//      ↓
// Commit
//      ↓
// Merge into main
//      ↓
// Delete feature branch

// 2. Delete a local branch
// The command is:
// git branch -d feature/login-automation

// Here:
// -d

// means delete the branch.
// Example:
// git branch -d feature/login-automation

// This deletes the local branch.
// Important
// Deleting the branch does not mean your repository itself is deleted.
// It removes that branch reference from your local repository.
// 3. What if Git says the branch has not been merged?
// Suppose you run:
// git branch -d feature/login-automation

// but Git detects that the branch contains changes that haven't been merged.
// Git may refuse the deletion because it wants to protect you from accidentally losing unmerged work.
// There is a stronger deletion option:
// git branch -D feature/login-automation

// -D forces the deletion.
// Important distinction
// git branch -d <branch>

// ➡️ Safe/normal deletion; Git checks whether the branch is safely merged.
// git branch -D <branch>

// ➡️ Force deletion; Git does not require the branch to be merged.
// Do not use -D casually, because you can remove a branch containing work that hasn't been merged elsewhere.
// 4. Playwright example
// Imagine:
// main
// feature/login-automation
// feature/payment-automation

// You finish the login automation:
// feature/login-automation
//         ↓
//    Playwright tests
//         ↓
//       commit
//         ↓
//       merge
//         ↓
//        main

// Once the work is merged and you no longer need the local feature branch:
// git branch -d feature/login-automation

// Important rule
// You generally cannot delete the branch you are currently on.
// For example, if you are currently on:
// * feature/login-automation
//   main

// you should first switch to another branch:
// git switch main

// Then:
// git branch -d feature/login-automation

// Practice Set — Concept 4
// Answer without looking back. 😎
// Q1
// What does this command do?
// git branch -d feature/login-automation

//-> This command deletes the local branch named feature/login-automation. The -d option indicates that Git should perform a safe deletion, meaning it will only delete the branch if it has been fully merged into the current branch or another specified branch. If the branch has unmerged changes, Git will refuse to delete it to prevent data loss.

// Q2
// What is the difference between:
// git branch -d feature/login-automation
// and:
// git branch -D feature/login-automation

//-> The difference between the two commands is that git branch -d feature/login-automation performs a safe deletion, checking if the branch has been fully merged before allowing deletion. If it has unmerged changes, Git will refuse to delete it. On the other hand, git branch -D feature/login-automation forces the deletion of the branch regardless of whether it has been merged or not, potentially leading to loss of unmerged work.

// Q3
// Why might Git refuse this command?
// git branch -d feature/payment-automation

//-> Git might refuse the command git branch -d feature/payment-automation if the branch feature/payment-automation contains changes that have not been merged into the current branch or any other branch. This is a safety measure to prevent accidental loss of work that has not been integrated into the main development line. If you want to force the deletion despite unmerged changes, you would use git branch -D feature/payment-automation instead.

// Q4
// You are currently on:
// * feature/login-automation
//   main
// You want to delete feature/login-automation.
// Can you directly run:
// git branch -d feature/login-automation
// What should you do first?

//-> No, you cannot directly run git branch -d feature/login-automation while you are currently on that branch. You should first switch to another branch, such as main, using the command git switch main. After switching to a different branch, you can then safely delete feature/login-automation with git branch -d feature/login-automation.


// Q5 — Playwright scenario
// Your feature/login-automation branch contains Playwright login tests. The changes have already been merged into main.
// You are currently on main and no longer need the local feature branch.
// What command would you use to delete it safely?

//-> Since you are currently on main and the feature/login-automation branch has already been merged, you can safely delete it using the command git branch -d feature/login-automation. This will remove the local reference to the feature branch without affecting the merged changes in main.

// Send Q1–Q5. I'll evaluate each answer and score you. 💪

//-----validations----------//

// Excellent, macha. 🔥 This time you answered all 5 questions, and your explanations are technically strong.
// Concept 4 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correctly explained safe local branch deletion.
// Q2	✅ Correct	1/1	Perfect distinction between -d and -D.
// Q3	✅ Correct	1/1	Correctly identified unmerged changes as the reason Git may refuse deletion.
// Q4	✅ Correct	1/1	Correct: switch away from the branch first, then delete it.
// Q5	✅ Correct	1/1	Correct command and good explanation that merged changes remain in main.


// 🎯 Score: 5/5 — 100% 🏆
// One especially good part of Q5:
// "This will remove the local reference to the feature branch without affecting the merged changes in main."

// That's a strong interview-level explanation.
// Quick command summary
// git branch -d <branch>

// ➡️ Safe/normal deletion
// git branch -D <branch>

// ➡️ Force deletion
// git switch main
// git branch -d feature/login-automation

// ➡️ Switch away first, then safely delete the feature branch.
// ✅ Concept 4 — COMPLETE
// You're progressing through Branching cleanly. 💪
// Next Concept 5: understanding the difference between local branches and remote branches, including origin.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//*************************************************************

// Perfect, macha. 👍
// Concept 5 — Local vs Remote Branches

//*************************************************************


// File:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// So far, we've worked with local branches. Now let's understand what happens when your repository is connected to GitHub or another remote Git server.
// 1. Local branch
// A local branch exists in your local Git repository.
// Example:
// main
// feature/login-automation
// feature/payment-automation

// You can see local branches with:
// git branch

// 2. Remote branch
// A remote branch exists on the remote repository, such as GitHub.
// A common remote name is:
// origin

// So a remote branch can appear as:
// origin/main
// origin/feature/login-automation

// Think of it like:
// Your computer                  GitHub
// ──────────────                 ──────────────
// main                           origin/main
// feature/login-automation       origin/feature/login-automation

// origin is usually the name Git gives to the remote repository you cloned from.
// 3. Why does origin appear?
// Suppose you clone a GitHub repository:
// git clone <repository-url>

// Git normally names that remote repository:
// origin

// You can see your remote repositories with:
// git remote -v

// You might see:
// origin  <repository-url> (fetch)
// origin  <repository-url> (push)

// 4. Local branch vs remote branch
// Suppose you have:
// main
// feature/login-automation

// locally, while GitHub has:
// origin/main
// origin/feature/login-automation

// These are not the same branch reference.
// Your local branch:
// feature/login-automation

// is on your computer.
// The remote-tracking branch:
// origin/feature/login-automation

// represents the corresponding branch state that Git knows about on the remote repository.
// 5. Playwright example
// Imagine your team has a GitHub repository for Playwright automation.
// You create:
// git switch -c feature/login-automation

// You develop:
// login.spec.js

// and commit it.
// Then you push your branch to GitHub:
// git push -u origin feature/login-automation

// Now the branch is available on the remote repository as:
// origin/feature/login-automation

// The basic picture is:
// Local                         Remote
// ─────                         ──────
// feature/login-automation  →   origin/feature/login-automation

// Important distinction
// git branch

// ➡️ Shows local branches
// git branch -r

// ➡️ Shows remote-tracking branches
// git branch -a

// ➡️ Shows both local and remote-tracking branches
// Quick mental model
// Think:
// LOCAL
// feature/login-automation

//         ↓ git push

// REMOTE
// origin/feature/login-automation

// And when remote changes need to be brought into your local repository:
// REMOTE
// origin/feature/login-automation

//         ↓ git fetch

// LOCAL knowledge of remote branch is updated

// We'll study the detailed fetch/pull behavior separately; for now, focus on understanding local vs remote branches.
// Practice Set — Concept 5
// Answer without looking back. 😎
// Q1
// What is a local branch?

//-> A local branch is a branch that exists in your local Git repository on your computer. It allows you to work on changes independently without affecting the main line of development or the remote repository. Local branches are created, modified, and deleted within your local environment and can be pushed to a remote repository when ready.

// Q2
// What does origin usually represent in a Git repository?

//-> In a Git repository, origin usually represents the default name given to the remote repository from which you cloned your local repository. It serves as a reference point for pushing and pulling changes between your local repository and the remote repository, such as GitHub or another Git server.

// Q3
// What is the difference between:
// git branch
// and
// git branch -r

//-> The command git branch lists all the local branches in your Git repository, showing the branches that exist on your computer. In contrast, git branch -r lists all the remote-tracking branches, which represent the state of branches on the remote repository (like GitHub) that your local repository is aware of. The -r option specifically focuses on branches that track remote changes rather than local development.

// Q4
// What does this represent?
// origin/feature/login-automation
// Is it a normal local branch or a remote-tracking branch?

//-> origin/feature/login-automation represents a remote-tracking branch. It is not a normal local branch; instead, it reflects the state of the feature/login-automation branch on the remote repository (such as GitHub) that your local repository is aware of. This allows you to track changes made to that branch on the remote server without directly modifying your local branches.

// Q5 — Playwright scenario
// You have created this local branch:
// feature/login-automation
// You want to push it to GitHub for your team.
// What does this command do?
// git push -u origin feature/login-automation
// Explain the role of:
// - push
// - origin
// - feature/login-automation
// - -u

//-> The command git push -u origin feature/login-automation pushes your local branch feature/login-automation to the remote repository (GitHub) and sets up a tracking relationship between your local branch and the remote branch.
// - push: This action sends your local commits to the remote repository, updating the corresponding branch on GitHub.
// - origin: This specifies the remote repository you are pushing to, which is typically the default name for the repository you cloned from.
// - feature/login-automation: This is the name of the local branch you are pushing to the remote repository. It will create or update the corresponding branch on GitHub.
// - -u: This option sets up an upstream tracking relationship between your local branch and the remote branch, allowing you to use simpler commands like git pull and git push in the future without specifying the remote and branch names explicitly.

// Send Q1–Q5, and I'll evaluate them individually. 💪


//-----validations----------//

// Excellent, macha. 🔥 This is a very strong answer set.
// Concept 5 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correctly explained a local branch and its purpose.
// Q2	✅ Correct	1/1	Correct: origin is the usual name for the remote repository.
// Q3	✅ Correct	1/1	Correct distinction between local branches and remote-tracking branches.
// Q4	✅ Correct	1/1	Correct: origin/feature/login-automation is a remote-tracking branch.
// Q5	✅ Correct	1/1	Excellent explanation of push, origin, branch name, and -u.


// 🎯 Score: 5/5 — 100% 🏆
// Your Q5 explanation is especially good:
// "-u sets up an upstream tracking relationship..."

// That's exactly the important concept to understand.
// One small clarification
// When you said:
// "feature/login-automation is the name of the local branch you are pushing..."

// That's correct in this command:
// git push -u origin feature/login-automation

// The command pushes the local branch to the remote and establishes the upstream relationship with the corresponding remote branch.
// So afterward, you can generally use:
// git push

// and:
// git pull

// without repeatedly specifying:
// origin feature/login-automation

// Branching Progress
// You've now completed:
// - ✅ Concept 1 — What is a Git branch?
// - ✅ Concept 2 — Creating and switching branches
// - ✅ Concept 3 — Checking/listing branches
// - ✅ Concept 4 — Deleting branches
// - ✅ Concept 5 — Local vs remote branches
// 🏆 Current Concept 5 Score: 100%
// Next Concept 6: working with remote branches — how branches move between your local repository and the remote repository using push, fetch, and pull.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//*************************************************************

// Perfect, macha. 🔥
// Concept 6 — Working with Remote Branches: Push, Fetch & Pull
//*************************************************************

// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// You already learned push, pull, and fetch during Git Basics. Here, we're connecting those commands specifically to branches and remote branches.
// 1. git push
// Suppose you're working locally:
// feature/login-automation

// You have committed your Playwright changes.
// To send the branch and its commits to GitHub:
// git push -u origin feature/login-automation

// Think:
// LOCAL
// feature/login-automation
//         │
//         │ git push
//         ▼
// REMOTE
// origin/feature/login-automation

// After the upstream is established, you can normally use:
// git push

// 2. git fetch
// Suppose another developer pushes changes to:
// feature/login-automation

// You want to see those remote changes without immediately integrating them into your current working branch.
// Use:
// git fetch

// Conceptually:
// REMOTE
// origin/feature/login-automation
//         │
//         │ git fetch
//         ▼
// Your local knowledge of the remote is updated

// Important
// git fetch does not automatically merge the remote changes into your current branch.
// This is an important distinction.
// 3. git pull
// If you want to retrieve remote changes and integrate them into your current branch, you can use:
// git pull

// Conceptually:
// REMOTE
// origin/feature/login-automation
//         │
//         │ git pull
//         ▼
// Fetch + integrate
//         │
//         ▼
// LOCAL branch
// feature/login-automation

// A simple mental model:
// git fetch
//     ↓
// Get remote updates
//     ↓
// Don't automatically integrate them

// git pull
//     ↓
// Get remote updates
//     ↓
// Integrate them into current branch

// 4. Playwright team example
// Imagine you and another tester are working on the same automation project.
// You:
// feature/login-automation

// Your teammate:
// feature/payment-automation

// Your teammate pushes:
// git push

// to GitHub.
// You can update your knowledge of remote branches with:
// git fetch

// If changes relevant to your current branch need to be integrated, you can use:
// git pull

// ⭐ Key distinction
// Remember these three:
// git push

// ➡️ Local → Remote
// git fetch

// ➡️ Remote → Local knowledge of remote state
// git pull

// ➡️ Remote → Local + integrate changes
// And:
// git push -u origin feature/login-automation

// ➡️ Push the branch and establish its upstream tracking relationship.
// Practice Set — Concept 6
// Answer without looking back. 😎
// Q1
// You created this local branch:
// feature/login-automation
// You committed your Playwright tests and want to send the branch to GitHub for the first time.
// What command would you use?

//-> You would use the command git push -u origin feature/login-automation to send your local branch to GitHub for the first time. The -u option sets up an upstream tracking relationship between your local branch and the remote branch, allowing you to use simpler commands like git push and git pull in the future without specifying the remote and branch names explicitly.

// Q2
// Another developer has pushed new commits to the remote repository.
// You want to retrieve information about those remote changes without automatically integrating them into your current branch.
// Which command would you use?

//-> You would use the command git fetch to retrieve information about the remote changes without automatically integrating them into your current branch. This command updates your local knowledge of the remote branches, allowing you to see what changes have been made on the remote repository without affecting your current working branch.

// Q3
// What is the key difference between:
// git fetch
// and:
// git pull

//-> The key difference between git fetch and git pull is that git fetch retrieves updates from the remote repository and updates your local knowledge of the remote branches without integrating those changes into your current branch. In contrast, git pull not only fetches the updates but also automatically merges them into your current branch, combining the remote changes with your local work. Essentially, git fetch is a safe way to see what has changed remotely, while git pull applies those changes directly to your working branch.


// Q4
// Explain the direction of data/change flow for:
// git push
// git fetch
// git pull
// Use simple words.

//-> The flow of data/change for each command is as follows:
// - git push: LOCAL to REMOTE
// - git fetch: REMOTE to LOCAL
// - git pull: REMOTE to LOCAL

// Q5 — Playwright scenario
// You are working on:
// feature/login-automation
// Your teammate has pushed new changes to the same remote branch.
// You want to get the latest remote changes and integrate them into your current local branch.
// Which command would you normally use?
// Explain why.

//-> You would normally use the command git pull to get the latest remote changes and integrate them into your current local branch. This command fetches the updates from the remote repository and automatically merges them into your local branch, ensuring that you have the most up-to-date version of the code and can continue working without conflicts. It combines both fetching and merging in one step, making it convenient for keeping your local branch synchronized with the remote branch.

// Send Q1–Q5, macha. 💪


// //-----validations----------//

// Excellent, macha. 🔥 Strong answers again.
// Concept 6 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correct first push command and excellent explanation of -u.
// Q2	✅ Correct	1/1	Correct: git fetch retrieves remote updates without integrating them.
// Q3	✅ Correct	1/1	Correct distinction between fetch and pull.
// Q4	⚠️ Partially correct	0.75/1	push is correct. fetch and pull direction is broadly correct, but the important difference is what happens after the remote changes arrive.
// Q5	✅ Correct	1/1	Correct: git pull fetches and integrates changes into the current branch.


// 🎯 Score: 4.75/5 — 95%
// Q4 clarification
// You wrote:
// git push  → LOCAL → REMOTE
// git fetch → REMOTE → LOCAL
// git pull  → REMOTE → LOCAL

// The direction is fine as a simplified model, but for interviews, remember the behavior:
// git push
// LOCAL commits
//      ↓
// REMOTE

// git fetch
// REMOTE updates
//      ↓
// LOCAL remote-tracking information
//      ↓
// No automatic integration

// git pull
// REMOTE updates
//      ↓
// LOCAL
//      ↓
// Fetch + integrate into current branch

// So don't describe fetch and pull as exactly the same just because their direction is both remote → local.
// ⭐ Your strongest answer
// Q3 was very good:
// "git fetch is a safe way to see what has changed remotely, while git pull applies those changes directly to your working branch."

// That's an excellent interview explanation.
// Branching Progress
// - ✅ Concept 1 — Git branch
// - ✅ Concept 2 — Create/switch branches
// - ✅ Concept 3 — List/check branches
// - ✅ Concept 4 — Delete branches
// - ✅ Concept 5 — Local vs remote branches
// - ✅ Concept 6 — Push/fetch/pull with branches
// Concept 6 — COMPLETE ✅
// Next Concept 7: Branch naming conventions and practical feature/bugfix branches — especially how you would name branches in a real Playwright automation project.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//*************************************************************

// Perfect, macha. 👍
// Concept 7 — Branch Naming Conventions
// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// Branch naming is important in real projects because the branch name should quickly tell the team what work is being done.
// 1. Feature branches
// For a new feature, a common pattern is:
// feature/<description>

// Examples:
// feature/login-automation
// feature/payment-automation
// feature/search-tests
// feature/report-generation

// For your Playwright project:
// feature/login-tests

// clearly indicates that the branch is related to login automation.
// 2. Bug-fix branches
// For fixing an existing problem:
// bugfix/<description>

// Examples:
// bugfix/login-timeout
// bugfix/payment-validation
// bugfix/flaky-search-test

// For example, if your Playwright login test is failing because of a timeout:
// bugfix/login-timeout

// is more descriptive than:
// test123

// 3. Hotfix branches
// For an urgent production issue, teams may use:
// hotfix/<description>

// Example:
// hotfix/production-login-failure

// The exact naming convention can vary between organizations, so follow your project's established convention when one exists.
// 4. Why descriptive names matter
// Compare:
// branch1
// test
// newbranch

// with:
// feature/login-automation
// bugfix/login-timeout
// feature/payment-validation

// The second group immediately tells another developer what the branch is for.
// This becomes particularly useful when a team has many developers and many branches.
// 5. Playwright project example
// Imagine you're working on a Playwright automation framework:
// main
// │
// ├── feature/login-automation
// ├── feature/payment-automation
// ├── feature/search-tests
// └── bugfix/login-timeout

// Each branch has a clear purpose.
// A typical workflow could be:
// Create branch
//       ↓
// Work on Playwright tests
//       ↓
// Commit changes
//       ↓
// Push branch
//       ↓
// Create Pull Request
//       ↓
// Review
//       ↓
// Merge

// Important rules
// When naming branches:
// ✅ Be descriptive
// feature/login-automation

// ✅ Keep names reasonably short
// Avoid extremely long names.
// ✅ Use a consistent convention
// If the team uses:
// feature/
// bugfix/
// hotfix/

// follow that convention.
// ❌ Avoid vague names
// mybranch
// test
// changes
// new
// abc

// ❌ Avoid unnecessary spaces
// Prefer:
// feature/login-automation

// instead of:
// feature/login automation

// Practice Set — Concept 7
// Answer without looking back. 😎
// Q1
// You are developing Playwright automation for a new user registration feature.
// Suggest a suitable branch name.

//-> A suitable branch name for developing Playwright automation for a new user registration feature could be: feature/user-registration-automation. This name clearly indicates that the branch is focused on automating tests related to user registration, following the feature/ naming convention.

// Q2
// There is an existing Playwright test that intermittently fails because of a timeout during login.
// Suggest a suitable bug-fix branch name.

//-> A suitable bug-fix branch name for addressing the intermittent timeout issue during login could be: bugfix/login-timeout. This name clearly indicates that the branch is focused on fixing the specific problem related to login timeouts, following the bugfix/ naming convention.

// Q3
// Which branch name is more descriptive?
// test123
// or
// feature/payment-automation
// Explain why.

//-> The branch name feature/payment-automation is more descriptive than test123. It clearly indicates that the branch is related to automating tests for the payment feature, providing context about its purpose. In contrast, test123 is vague and does not convey any meaningful information about the work being done on that branch, making it harder for team members to understand its intent at a glance.

// Q4
// What is the difference between these branch prefixes?
// feature/
// bugfix/
// hotfix/

///-> The difference between these branch prefixes is as follows:
// - feature/: This prefix is used for branches that are focused on developing new features or functionality. For example, feature/login-automation would indicate work on automating login tests.
// - bugfix/: This prefix is used for branches that are dedicated to fixing existing bugs or issues in the codebase. For example, bugfix/login-timeout would indicate work on resolving a timeout issue during login.
// - hotfix/: This prefix is used for branches that address urgent issues in production that need immediate attention. For example, hotfix/production-login-failure would indicate a critical fix for a login failure affecting users in production.

// Q5 — Real project scenario
// You are working on a Playwright project. Your task is:
// "Create automated tests for the checkout flow."
// You are currently on:
// main
// Suggest a suitable branch name and write the command that creates the branch and immediately switches to it.

//-> A suitable branch name for creating automated tests for the checkout flow could be: feature/checkout-flow-automation. This name clearly indicates that the branch is focused on automating tests related to the checkout process, following the feature/ naming convention.

// The command to create the branch and immediately switch to it would be:
// git switch -c feature/checkout-flow-automation

// Send Q1–Q5, macha. 💪


//-----validations----------//

// Excellent, macha. 🔥 All five answers are correct and practical.
// Concept 7 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	feature/user-registration-automation is clear and descriptive.
// Q2	✅ Correct	1/1	bugfix/login-timeout clearly communicates the issue.
// Q3	✅ Correct	1/1	Correctly explained why feature/payment-automation is more meaningful than test123.
// Q4	✅ Correct	1/1	Correct distinction between feature/, bugfix/, and hotfix/.
// Q5	✅ Correct	1/1	Excellent branch name and correct git switch -c command.


// 🎯 Score: 5/5 — 100% 🏆
// Your Q5 is exactly the kind of answer I'd expect in a real project:
// git switch -c feature/checkout-flow-automation

// You also correctly connected the branch name to the actual Playwright task, rather than using a generic name.
// ✅ Branching Progress
// You've completed:
// 1. ✅ Git branch concept — 100%
// 2. ✅ Creating & switching branches — 100%
// 3. ✅ Listing/checking branches — 80% (Q4 was initially unanswered)
// 4. ✅ Deleting branches — 100%
// 5. ✅ Local vs remote branches — 100%
// 6. ✅ Push / fetch / pull with branches — 95%
// 7. ✅ Branch naming conventions — 100%
// Current Concept 7: COMPLETE ✅
// Next we'll move to Concept 8 — Branch workflow: create → work → commit → push → Pull Request → merge, using a realistic Playwright automation scenario.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//*************************************************************

// Perfect, macha. 🔥 Let's move to the next concept.
// Concept 8 — Complete Branch Workflow
// Exact file:
// Playwright - learning - 45 - days/
// └── 03 - Git - and - GitHub/
//     └── 02 - Branching/
//         └── 01 - Branching.js

// Now we'll connect everything you've learned into a real Playwright project workflow.
// Scenario
// You're asked:
// Create automated tests for the login feature.

// You are currently on:
// main

// Step 1 — Create and switch to a feature branch
// git switch -c feature/login-automation

// Now:
// main
//     \
//      feature/login-automation  ← YOU

// Step 2 — Write your Playwright tests
// For example:
// tests/
// └── login.spec.js

// You make your changes on:
// feature/login-automation

// main is not directly modified by your feature work.
// Step 3 — Check your changes
// First:
// git status

// You might see:
// modified: tests/login.spec.js

// This lets you verify what has changed before staging.
// Step 4 — Stage the changes
// git add tests/login.spec.js

// Or, if appropriate for the project:
// git add .

// Step 5 — Commit the changes
// git commit -m "Add login automation tests"

// Now your changes are recorded in your local Git history.
// Step 6 — Push the feature branch
// For the first push:
// git push -u origin feature/login-automation

// Now your branch is available on the remote repository.
// LOCAL                         REMOTE
// feature/login-automation  →   origin/feature/login-automation

// Step 7 — Create a Pull Request
// After pushing, you can create a Pull Request (PR) on GitHub.
// Conceptually:
// feature/login-automation
//           ↓
//        Pull Request
//           ↓
//        Code Review
//           ↓
//          main

// A Pull Request allows team members to review your changes before they are merged.
// Step 8 — Review and merge
// Your team reviews the Playwright tests.
// If the changes are approved, the feature branch can be merged into main.
// feature/login-automation
//           ↓
//         MERGE
//           ↓
//          main

// The exact review/merge rules depend on the team's Git workflow.
// Step 9 — Clean up the local branch
// After the branch has been merged, you may no longer need the local feature branch.
// First make sure you're not currently on it:
// git switch main

// Then:
// git branch -d feature/login-automation

// ⭐ Complete workflow
// Remember this sequence:
// main
//   ↓
// git switch -c feature/login-automation
//   ↓
// Write Playwright tests
//   ↓
// git status
//   ↓
// git add
//   ↓
// git commit
//   ↓
// git push -u origin feature/login-automation
//   ↓
// Create Pull Request
//   ↓
// Code Review
//   ↓
// Merge into main
//   ↓
// Switch to main
//   ↓
// Delete local feature branch

// This is the real-world connection between the Git commands you've learned.
// Practice Set — Concept 8
// Now I want you to explain the workflow yourself. 💪
// Q1
// You are currently on:
// main
// You need to start work on Playwright login automation.
// Write the command to create and switch to the feature branch.

//-> The command to create and switch to the feature branch for Playwright login automation is:
// git switch -c feature/login-automation

// Q2
// You modified:
// tests/login.spec.js
// What command can you use to check what has changed before staging?

//-> To check what has changed before staging, you can use the command:
// git status

// Q3
// You want to stage the login test file.
// Write the Git command.
//-> The Git command to stage the login test file is:
// git add tests/login.spec.js

// Q4
// You have staged the file and now want to create a commit.
// Write a suitable commit command.
//-> A suitable commit command would be:
// git commit -m "Add login automation tests"

// Q5 — Full workflow
// Explain the following workflow in your own words:
// Create branch
//       ↓
// Write Playwright tests
//       ↓
// git status
//       ↓
// git add
//       ↓
// git commit
//       ↓
// git push
//       ↓
// Pull Request
//       ↓
// Code Review
//       ↓
// Merge into main
// For each step, explain what is happening and why it is done.
// Take your time on Q5. This one is designed to test whether you understand the complete workflow, not just the commands.

//-> The workflow can be explained as follows:
// 1. Create branch: This step involves creating a new feature branch (e.g., feature/login-automation) from the main branch. It allows you to work on the login automation tests independently without affecting the main codebase.
// 2. Write Playwright tests: In this step, you develop the actual Playwright test scripts for the login functionality. This is where you implement the test cases and logic to automate the login process.
// 3. git status: After making changes, you use git status to check the current state of your working directory. It shows which files have been modified, added, or deleted, helping you verify what changes are ready to be staged.
// 4. git add: This command stages the modified files (e.g., tests/login.spec.js) for the next commit. Staging allows you to prepare specific changes that you want to include in your commit.
// 5. git commit: This step creates a new commit with a descriptive message (e.g., "Add login automation tests"). The commit records the changes in your local Git history, allowing you to track the development of your feature.
// 6. git push: After committing, you push the feature branch to the remote repository (e.g., GitHub). This makes your changes available to other team members and allows for collaboration.
// 7. Pull Request: You create a Pull Request (PR) on GitHub to propose merging your feature branch into the main branch. The PR provides a platform for team members to review your changes, discuss improvements, and ensure code quality before merging.
// 8. Code Review: During the code review process, team members examine your changes, provide feedback, and suggest any necessary modifications. This step ensures that the code meets the project's standards and best practices.
// 9. Merge into main: Once the Pull Request is approved, the feature branch is merged into the main branch. This integrates your login automation tests into the main codebase, making them part of the official project.
// Overall, this workflow ensures that new features are developed in isolation, reviewed for quality, and integrated into the main project in a controlled manner.


//------validations----------//

// Excellent, macha. 🔥 This is your strongest Git workflow answer so far.
// Concept 8 — Evaluation
// Q	Result	Score	Feedback
// Q1	✅ Correct	1/1	Correct git switch -c command.
// Q2	✅ Correct	1/1	git status is correct for checking the working-tree state before staging.
// Q3	✅ Correct	1/1	Correctly staged the specific Playwright test file.
// Q4	✅ Correct	1/1	Good descriptive commit message.
// Q5	✅ Excellent	1/1	You explained every stage, its purpose, and how the workflow protects main.


// 🎯 Score: 5/5 — 100% 🏆
// Your Q5 explanation is interview-ready. You didn't just list commands—you explained the purpose of each step.
// One particularly good explanation:
// "git add ... allows you to prepare specific changes that you want to include in a commit."

// And your overall conclusion correctly connects the workflow:
// "new features are developed in isolation, reviewed for quality, and integrated into the main project in a controlled manner."

// ✅ Branching Chapter Progress
// You've now completed:
// 1. ✅ What is a Git branch?
// 2. ✅ Creating and switching branches
// 3. ✅ Checking/listing branches
// 4. ✅ Deleting branches
// 5. ✅ Local vs remote branches
// 6. ✅ Push / fetch / pull with branches
// 7. ✅ Branch naming conventions
// 8. ✅ Complete branch workflow
// 🏆 Concept 8: COMPLETE — 100%
// You now have the complete mental model:
// main
//   ↓
// create feature branch
//   ↓
// develop Playwright tests
//   ↓
// status
//   ↓
// add
//   ↓
// commit
//   ↓
// push
//   ↓
// Pull Request
//   ↓
// Code Review
//   ↓
// merge
//   ↓
// main

// Next: we should move to the next item in the tracker after Module 3 → Chapter 2 — Branching, rather than inventing another Git topic.


