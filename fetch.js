
// async & await.

const getPoketmons = async () => {

    const response = await fetch('jsondata/pikachu.json');
    // 에러 만들어주기.
    // const response = await fetch('jsondata/pikachuuuu.json');
    console.log(response);
    const data = await response.json();
    return data;
}

getPoketmons()
    .then(data => console.log('resolve :', data))
    .catch(err => console.log('rejected: ', err));

// const test = getPoketmons();
// console.log(test);

// fetch('jsondata/jamanbo.json').then(res => {
//     return res.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

