# 1st commit
# 1. Initialize git repo (only once in the project)
git init  

# 2. Add all files and folders
git add .  

# 3. Commit your changes with a message
git commit -am "Initial commit"  

# 4. Add remote origin (replace with your repo URL)
git remote add origin https://github.com/pyrishi007/React-Heart

# 5. Push to GitHub (main branch)
git push -u origin main  

# after 2nd commit 
# 1. Stage all changes (new + modified + deleted files)
git add .

# 2. Commit with a message
git commit -am "Describe what you changed"

# 3. Push to the same branch
git push


# Some handy git-command
# 3️⃣ Handy Git Commands
# 🟢 Check repository status
git status

# 📜 See commit history
git log

# 📂 Stage a specific file
git add path/to/file

# 🔄 Pull latest changes from GitHub
git pull

# ⚡ One-liner: stage + commit + push
git add . && git commit -m "Your message" && git push

# 🌿 Create a new branch
git checkout -b new-branch-name

# 🔀 Switch branches
git checkout branch-name

# 🔗 Merge another branch into current branch
git merge branch-name

# ❌ Delete a local branch
git branch -d branch-name

# 📥 Clone a repository
git clone https://github.com/USERNAME/REPO_NAME.git //Remeber


# To Start the project 
npm install

# Run the project 
npm start 