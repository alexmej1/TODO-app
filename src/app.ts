
window.onload = () => {
    let taskArr: any = document.body.getElementsByClassName('taskDiv');
    let divsOnScreen: number = 0;
    let addBtn: any = document.getElementsByClassName("addBtn")[0];
    addBtn.onclick = addTask;
    function addTask(): void {
        if (divsOnScreen < 5) {
            let input: any = document.getElementsByClassName('input')[0];
            let taskText: any = taskArr[divsOnScreen].getElementsByClassName('taskText')[0];
            taskText.innerText = input.value;
            taskArr[divsOnScreen].style.zIndex = "3";
            divsOnScreen++;
            input.value = "";
        } else
            alert('you can`t add more');
    }
    let rmAllBtn: any = document.getElementsByClassName("addBtn")[0];
    rmAllBtn.onclick = removeAll;
    function removeAll(): void {
        for(let i =4; i>=0;i--){
            let taskText: any = taskArr[i].getElementsByClassName('taskText')[0];
            taskText.innerText = "";
            taskArr[i].style.zIndex = "1";
            divsOnScreen--;
        }
    }
    let removeBtn: any = document.getElementsByClassName("rmBtn");
    for (let i = 0; i < 5; i++)
        removeBtn[i].onclick = () => { removeTask(i) };
    function removeTask(index: number): void {
        let taskText: any = taskArr[index].getElementsByClassName('taskText')[0];
        taskText.innerText = '';
        taskArr[index].style.zIndex = "1";
        divsOnScreen--;
    }
    let changeBtn: any = document.getElementsByClassName("changeBtn");
    for (let i = 0; i < 5; i++)
        changeBtn[i].onclick = () => { changeTask(i) };
    function changeTask(index: number): void {
        let input: any = document.getElementsByClassName('input')[0];
        let taskText: any = taskArr[index].getElementsByClassName('taskText')[0];
        taskText.innerText = input.value;
    }
}
//TODO: local storage

//local storage
// let arr: Array<string>= ['bro','hi','alex','vlad'];
// localStorage.setItem('array', JSON.stringify(arr));
// let str: string| null= localStorage.getItem('array');
// if(str!=null)
// console.log(JSON.parse(str));

