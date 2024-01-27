const queryString = window.location.search;
const param = new URLSearchParams(queryString);
const meme = param.get('meme')
const id = meme.split('/')[6].split('.')[0]

async function run(){
    if(!meme){
        document.getElementById('modal-nomeme').setAttribute('x-data', '{ isOpen:true }')   
    } else {
        document.title = id
        document.getElementById('memeid').value = id
        document.getElementById('memeurl').value = meme
        document.getElementById('report').classList.remove('hidden')

        // if(type === 'img'){
        //     document.getElementById('display-img').src = `${url}`
        //     document.getElementById('display-img').classList.remove('hidden')
        // } else if(type === 'video'){
        //     document.getElementById('display-video').src = `${url}`
        //     document.getElementById('display-video').classList.remove('hidden')
        // }
    }

    document.getElementById('loading').classList.add('hidden')
}

setTimeout(run, 1000)