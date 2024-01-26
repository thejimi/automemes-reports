const queryString = window.location.search;
const param = new URLSearchParams(queryString);
const id = param.get('id')
const server = param.get('guild')
const url = param.get('url')
const type = param.get('type')

async function run(){
    if(!id){
        document.getElementById('modal-nomeme').setAttribute('x-data', '{ isOpen:true }')   
    } else {
        document.title = `Report ${id}`
        document.getElementById('memeid').value = id
        document.getElementById('memeurl').value = url
        document.getElementById('memeserver').value = server
        document.getElementById('report').classList.remove('hidden')

        if(type === 'img'){
            document.getElementById('display-img').src = `${url}`
            document.getElementById('display-img').classList.remove('hidden')
        } else if(type === 'video'){
            document.getElementById('display-video').src = `${url}`
            document.getElementById('display-video').classList.remove('hidden')
        }
    }

    document.getElementById('loading').classList.add('hidden')
}

setTimeout(run, 1000)