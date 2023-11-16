function newImage(asset, left, bottom) {
    let image = document.createElement('img')
    image.src = asset
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

newImage('assets/green-character.gif', '100px', '100px')

newImage('assets/pine-tree.png', '450px', '200px')

newImage('assets/tree.png', '200px', '300px')

newImage('assets/pillar.png', '350px', '100px')

newImage('assets/crate.png', '150px', '200px')

newImage('assets/well.png', '500px', '425px')

function newItem(asset, left, bottom){
    let item = document.createElement('img')
    item.src = asset
    item.position = 'fixed'
    item.left = left
    item.bottom = bottom
    document.body.append(item)
    
    item.addEventListener('dblclick', function(){
        item.remove()
    }) 
}

newItem('assets/sword.png', '500px', '405px')

newItem('assets/shield.png', '165px', '185px')

newItem('assets/staff.png', '600px', '100px')

function backgroundImage(asset, left, bottom) {
    let image = document.createElement('img')
    image.src = asset
    image.style.position = 'fixed'
    image.style.zIndex = -1
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

function createBackground(){
    let grassHeight = window.innerHeight *.53;
    let skyHeight = window.innerHeight *.47;
    

    for(let i = 0; i < window.innerWidth; i+= 100){
        for (let j = 0; j < grassHeight; j += 100){
            backgroundImage('assets/grass.png', i + 'px', j + 'px')
        }
    }

    for(let i = 0; i < window.innerWidth; i += 100){
        for(let j = 0; j < skyHeight; j += 100){
            let k = grassHeight + j;
            backgroundImage('assets/sky.png', i + 'px', k + 'px');
        }
    }
}


createBackground();