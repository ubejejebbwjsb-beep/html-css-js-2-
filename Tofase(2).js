let title = document.getElementById('title');
let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let message = document.getElementById('message');
let taskCount = document.getElementById('taskCount');
let taskList = document.getElementById('taskList');

let count = 0;

addTaskButton.addEventListener('click', function() {
    let taskText = taskInput.value.trim(); 
    
    if (taskText === '') {
        message.textContent = "Please Enter your Task.";
        message.style.color = "#ff4d4d"; // لون أحمر عند الخطأ
        return;
    }

    // 1. إنشاء عنصر القائمة ونص المهمة
    let li = document.createElement('li');
    
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.className = 'task-text'; // لتطبيق الخط الكبير من الـ CSS

    // 2. إنشاء حقل الملاحظات
    let NoteInput = document.createElement('input');
    NoteInput.type = 'text';
    NoteInput.placeholder = 'Add a note...';
    NoteInput.className = 'task-note'; 

    // 3. إنشاء زر الحذف
    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.className = 'delete-btn'; 

    // 4. ربط العناصر بالترتيب داخل الـ li
    li.appendChild(taskSpan);
    li.appendChild(NoteInput);
    li.appendChild(deletebtn);
    taskList.appendChild(li);

    // 5. تحديث رسالة النجاح والعداد
    message.textContent = "Task Added Successfully.";
    message.style.color = "#01d2af"; // لون نيون مميز للنجاح
    count++;
    taskCount.textContent = count;
    
    taskInput.value = '';
    taskInput.focus();

    // 6. حدث حذف المهمة وتحديث العداد
    deletebtn.addEventListener('click', function() {
        taskList.removeChild(li);
        
        count--; 
        taskCount.textContent = count; 
        message.textContent = "Task Deleted.";
        message.style.color = "#ff4d4d";
    });    
});
