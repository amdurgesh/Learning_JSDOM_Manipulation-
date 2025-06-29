var arr = [

    {dp:"https://th.bing.com/th/id/R.d930651664e60ab0a9873be8e2aa3e81?rik=EBlnjyuPTTRdNg&riu=http%3a%2f%2fwww.hdwallpapersfreedownload.com%2fuploads%2flarge%2fcartoons%2fdoraemon-full.jpg&ehk=bMkOVg25D1cJaXdXQdJOjvkUi5JVCeq9jQJw6sIeDKU%3d&risl=&pid=ImgRaw&r=0",
        story:"https://th.bing.com/th/id/R.d930651664e60ab0a9873be8e2aa3e81?rik=EBlnjyuPTTRdNg&riu=http%3a%2f%2fwww.hdwallpapersfreedownload.com%2fuploads%2flarge%2fcartoons%2fdoraemon-full.jpg&ehk=bMkOVg25D1cJaXdXQdJOjvkUi5JVCeq9jQJw6sIeDKU%3d&risl=&pid=ImgRaw&r=0"
    },

    {dp:"https://img.freepik.com/premium-photo/cartoon-models_948023-2980.jpg?w=2000",
        story:"https://static.vecteezy.com/system/resources/previews/017/786/404/non_2x/3d-rendering-cartoon-girl-png.png"
    },

    {dp:"https://img.freepik.com/premium-photo/young-girl-cartoon-model-illustration-art-pastel-colors-cartoon-girl-illustration-generative-ai_455711-7910.jpg",
        story:"https://static.vecteezy.com/system/resources/previews/017/786/405/large_2x/3d-rendering-cartoon-girl-png.png"
    },

    {dp:"https://webneel.com/daily/sites/default/files/images/daily/09-2020/1-3d-girl-model-toon-girl-jorge-luis.jpg",
        story:"https://static.vecteezy.com/system/resources/previews/024/346/425/original/3d-happy-cartoon-girl-on-transparent-background-generative-ai-png.png"
    },

    {dp:"https://i.pinimg.com/originals/fd/30/6d/fd306dee080f29fcc5dda3d9521efefa.jpg",
        story:"https://i.pinimg.com/originals/e0/73/39/e07339b97fcba2872a07874e1e6a1828.gif"
    },
]

var stories = document.querySelector("#stories")
var pointer = ""
arr.forEach(function(elem, idx){
    pointer += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})

stories.innerHTML = pointer;

document.querySelector("#stories").addEventListener("click", function(dets){
    document.querySelector("#screen").style.display = "block"
    document.querySelector("#screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#screen").style.display = "none"
    },9000)
})