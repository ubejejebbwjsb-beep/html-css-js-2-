let title = document.getElementById('title');
let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTask');
let message = document.getElementById('message');
let taskCount = document.getElementById('taskCount');
let taskList = document.getElementById('taskList');
console.log(title, taskInput, addTaskButton, message, taskCount, taskList);

let count = 0;

addTaskButton.addEventListener('click', function() {
    let taskText = taskInput.value.trim(); // استخدام trim لمنع الفراغات
    
    if (taskText === '') {
        message.textContent = "Please Enter your Task.";
        return;
    }

    // 1. إنشاء عنصر القائمة ونص المهمة
    let li = document.createElement('li');
    //li.textContent = taskText + " "; // أضفنا مسافة صغيرة قبل الزر
    
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    let NoteInput = document.createElement('input');
    NoteInput.type = 'text';
    NoteInput.placeholder = 'Add a note...';


    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';

    // 3. ربط الزر بالعنصر ثم القائمة (بالترتيب الصحيح ودون تكرار)
    li.appendChild(taskSpan);
    li.appendChild(NoteInput);
    li.appendChild(deletebtn);
    taskList.appendChild(li);

    // 4. تحديث رسالة النجاح والعداد
    message.textContent = "Task Added Successfully.";
    count++;
    taskCount.textContent = count;
    
    taskInput.value = '';

    // 5. حدث حذف المهمة وتحديث العداد
    deletebtn.addEventListener('click', function() {
        taskList.removeChild(li);
        
        count--; // إنقاص العداد بمقدار 1 عند الحذف
        taskCount.textContent = count; // تحديث الرقم على الشاشة
        message.textContent = "Task Deleted.";
    });    
});
