const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data))
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
     fetch(url)
     .then((res) => res.json())
     .then((data) => displayLevelWord(data.data))
}

const displayLevelWord = (words) => {
     const wordContainer = document.getElementById('word-container')
     wordContainer.innerHTML ="";

     words.forEach((word) => {
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-13 px-5 space-y-4">
            <h1 class="font-bold text-2xl">${word.word}</h1>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-medium text-2xl font-bagla">${word.meaning} / ${word.pronunciation}</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF20]"><i class="fa-solid fa-circle-info"></i> </button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF20]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div> `

       wordContainer.append(card)
     })
}

const displayLesson = (lessons) => {
 const levelContainer = document.getElementById("level-container");
 levelContainer.innerHTML = "";
 for(let lesson of lessons){
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <button onClick="loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
    </button>`;

    levelContainer.append(btnDiv);
 }
}
loadLessons();