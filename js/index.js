var tasksList = [
    {
        id: 1,
        task: 'Task one',
        staff: 'Ali',
        startDate: '2020-12-05',
        finishDate: '2020-12-05',
        state: 'doing',
        isRejected: false
    },
    {
        id: 2,
        task: 'Task two',
        staff: 'Vali',
        startDate: '2020-12-05',
        finishDate: '2020-12-05',
        state: 'pending',
        isRejected: false
    },
    {
        id: 3,
        task: 'Task three',
        staff: 'Vali',
        startDate: '2020-12-05',
        finishDate: '2020-12-05',
        state: 'done',
        isRejected: false
    },
    {
        id: 4,
        task: 'Task four',
        staff: 'Vali',
        startDate: '2020-12-05',
        finishDate: '2020-12-05',
        state: 'rejected',
        isRejected: false
    },
]

var temp_state = ''

getTasksList()

function getTasksList() {

    document.getElementById('pending-list').innerHTML = ''
    document.getElementById('doing-list').innerHTML = ''
    document.getElementById('done-list').innerHTML = ''
    document.getElementById('rejected-list').innerHTML = ''

    for (i = 0; i < tasksList.length; i++) {
        if (tasksList[i].state === 'pending') {

            document.getElementById('pending-list').innerHTML +=
                '<div class="card">' +
                '<div class="card-body">' +
                '<h5>' + tasksList[i].task + (tasksList[i].isRejected ?
                '<span class="badge badge-pill badge-secondary">Rejected</span>' : '') + '</h5>' +
                '<h6>' + tasksList[i].staff + '</h6>' +
                '<h6>' + 'Start date: ' + tasksList[i].startDate + '</h6>' +
                '<h6>' + 'Finish date: ' + tasksList[i].finishDate + '</h6>' +
                '<select onchange="getStateValue(event)" name="state" class="form-control mb-2">' +
                '<option value="">' + 'Select status' + '</option>' +
                '<option value="Doing">' + 'Doing' + '</option>' +
                '<option value="Done">' + 'Done' + '</option>' +
                '</select>' +
                '<button onclick=editTask(' + tasksList[i].id + ') class="btn btn-warning">' + 'Edit' + '</button>' +
                '<button onclick=deleteTask(' + tasksList[i].id + ') class="btn btn-danger ml-2">' + 'Delete' + '</button>' +
                '</div>' +
                '</div>'
        } else if (tasksList[i].state === 'doing') {

            document.getElementById('doing-list').innerHTML +=
                '<div class="card">' +
                '<div class="card-body">' +
                '<h5>' + tasksList[i].task + '</h5>' +
                '<h6>' + tasksList[i].staff + '</h6>' +
                '<h6>' + 'Start date: ' + tasksList[i].startDate + '</h6>' +
                '<h6>' + 'Finish date: ' + tasksList[i].finishDate + '</h6>' +
                '<select onchange="getStateValue(event)" name="state" class="form-control mb-2">' +
                '<option value="">' + 'Select status' + '</option>' +
                '<option value="Pending">' + 'Pading' + '</option>' +
                '<option value="Done">' + 'Done' + '</option>' +
                '</select>' +
                '<button onclick=editTask(' + tasksList[i].id + ') class="btn btn-warning">' + 'Edit' + '</button>' +
                '<button onclick=deleteTask(' + tasksList[i].id + ') class="btn btn-danger ml-2">' + 'Delete' + '</button>' +
                '</div>' +
                '</div>'
        } else if (tasksList[i].state === 'rejected') {

            document.getElementById('rejected-list').innerHTML +=
                '<div class="card">' +
                '<div class="card-body">' +
                '<h5>' + tasksList[i].task + '</h5>' +
                '<h6>' + tasksList[i].staff + '</h6>' +
                '<h6>' + 'Start date: ' + tasksList[i].startDate + '</h6>' +
                '<h6>' + 'Finish date: ' + tasksList[i].finishDate + '</h6>' +
                '<select onchange="getStateValue(event)" name="state" class="form-control mb-2">' +
                '<option value="">' + 'Select status' + '</option>' +
                '<option value="Pending">' + 'Pading' + '</option>' +
                '<option value="Done">' + 'Done' + '</option>' +
                '</select>' +
                '<button onclick=editTask(' + tasksList[i].id + ') class="btn btn-warning">' + 'Edit' + '</button>' +
                '</div>' +
                '</div>'
        } else {

            document.getElementById('done-list').innerHTML +=
                '<div class="card">' +
                '<div class="card-body">' +
                '<h5>' + tasksList[i].task + '</h5>' +
                '<h6>' + tasksList[i].staff + '</h6>' +
                '<h6>' + 'Start date: ' + tasksList[i].startDate + '</h6>' +
                '<h6>' + 'Finish date: ' + tasksList[i].finishDate + '</h6>' +
                '<button onclick=rejectTask(' + tasksList[i].id + ') class="btn btn-secondary">' + 'Reject' + '</button>' +
                '</div>' +
                '</div>'
        }
    }
}

function addTask() {

    var new_id = Math.floor((Math.random() * 10000000) + 1);

    var new_task = document.forms['task-form']['task'].value;
    var new_staff = document.forms['task-form']['staff'].value;
    var new_start_date = document.forms['task-form']['start-date'].value;
    var new_finish_date = document.forms['task-form']['finish-date'].value;
    var new_state = document.forms['task-form']['state'].value.toLowerCase()

    if (new_task !== '' && new_staff !== '' && new_start_date !== '' && new_finish_date !== '' && new_state !== '') {

        var Task = {
            id: new_id,
            task: new_task,
            staff: new_staff,
            startDate: new_start_date,
            finishDate: new_finish_date,
            state: new_state,
            isRejected: false
        }

        tasksList.push(Task)

        getTasksList()

        document.forms['task-form']['task'].value = '';
        document.forms['task-form']['staff'].value = '';
        document.forms['task-form']['start-date'].value = '';
        document.forms['task-form']['finish-date'].value = '';
        document.forms['task-form']['state'].value = '';

    } else {
        alert(`Iltimos, ma'lumotlarni to'liq to'ldiring!`)
    }

}

function getStateValue(event) {
    temp_state = event.target.value.toLowerCase()
}

function editTask(id) {

    let objIndex;

    objIndex = tasksList.findIndex((obj => obj.id === id));

    if (temp_state !== '') {
        tasksList[objIndex].state = temp_state
        getTasksList()

        console.log(temp_state)
        console.log(tasksList)

        temp_state = ''
    }

}

function deleteTask(id) {
    let objIndex;

    objIndex = tasksList.findIndex((obj => obj.id === id));

    tasksList.splice(objIndex, 1)

    getTasksList()
}

function rejectTask(id) {
    console.log(id)
    console.log(tasksList)

    let selectedIndex = tasksList.findIndex(obj => obj.id === id)
    tasksList[selectedIndex].state = 'rejected'
    tasksList[selectedIndex].isRejected = true
    getTasksList()

}