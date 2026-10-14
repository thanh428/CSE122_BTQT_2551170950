        let tasks = [
            { text: "Đọc chương HTML5 cơ bản", completed: true },
            { text: "Làm bài tập CSS Grid", completed: false },
            { text: "Quay video OBS nộp bài", completed: false }
        ];

        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        const taskCounter = document.getElementById('taskCounter');

        function renderTasks() {
            taskList.innerHTML = '';
            let remainingCount = 0;

            tasks.forEach(function(task, index) {
                if (!task.completed) {
                    remainingCount++;
                }

                const li = document.createElement('li');
                li.className = 'task-item' + (task.completed ? ' completed' : '');

                li.innerHTML = `
                    <div class="task-content" onclick="toggleTask(${index})">
                        <div class="custom-checkbox"></div>
                        <span class="task-text">${task.text}</span>
                    </div>
                    <button class="delete-btn" onclick="deleteTask(event, ${index})">Xoá</button>
                `;

                taskList.appendChild(li);
            });

            taskCounter.textContent = `Còn ${remainingCount} việc chưa hoàn thành`;
        }

        function addNewTask() {
            const text = taskInput.value.trim();
            if (text === '') return;

            tasks.push({
                text: text,
                completed: false
            });

            taskInput.value = '';
            renderTasks();
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }

        function deleteTask(event, index) {
            event.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        }

        addBtn.addEventListener('click', addNewTask);

        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addNewTask();
            }
        });

        renderTasks();