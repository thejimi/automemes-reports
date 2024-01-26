const queryString = window.location.search;
const param = new URLSearchParams(queryString);
const id = param.get('id')
const server = param.get('server')
const category = param.get('category')
const details = param.get('details')
const url = param.get('url')
const username = param.get('username')

if(!id || !server || !category || !details || !username){
    setTimeout(() => {
        document.getElementById('modal-paramserror').setAttribute('x-data', '{ isOpen:true }')   
        document.getElementById('loading').classList.add('hidden')
    }, 1000);
}

if(category === 'invalid'){
    setTimeout(() => {
        document.getElementById('modal-categoryerror').setAttribute('x-data', '{ isOpen:true }')   
        document.getElementById('loading').classList.add('hidden')
    }, 1000);
}

setTimeout(() => {
    report()
    alert("OK")
}, 2000);

function report() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `https://discord.com/api/webhooks/1200571934568628274/dMVHkKtUpDKejQ_Uv8Q2YwufhNGkpJWabBMOBhHUYRysFQKpNv1oUpfoDV70GXuodWYG`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': `## Report | ${id}\n**Category:** ${category}\n**Found in:** ${server}\n**Details:** ${details}\n**Reported by:** ${username}\n**URL:** ${url}`,
        'username':'AutoMemes Report',
    }));
}