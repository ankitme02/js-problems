const birdSighted=(arr)=>{
    arr.sort();
    let maximumSightedId=0;
    let maxCounter=0;
    let minimumSighedtId=0;
    let minCounter=-1;
    for(let i=0;i<arr.length;i++)
    {
        let counter =1;
        let j=i;
        while(j+1<arr.length&&arr[j]==arr[j+1])
        {
            counter++;
            j++;
        }
        if(counter>maxCounter)
        {
            maximumSightedId=arr[i];
            maxCounter=counter;
        }
        if(minCounter==-1||minCounter>counter)
        {
            minCounter=counter;
            minimumSighedtId=arr[i];
        }
       i=j;
    }
    return [maximumSightedId,minimumSighedtId];
}
const input=[1,1,2,2,4,4,4,4,5];
const output=birdSighted(input);
console.log(output);