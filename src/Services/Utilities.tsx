const formatDate =(dateString:string)=>{
    const date = new Date(dateString)
    const options = { year: 'numeric' as const , month : 'short'as const};
    return date.toLocaleString('en-US' ,options)

}
function timeAgo(time:string) {
  const now = new Date();
  const postDate = new Date(time) //create a Date object from the actual post time the job was posted.
  const diff = now.getTime() - postDate.getTime(); // Difference in milliseconds

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (days < 30) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}
const getBase64 = (file :any) =>{
    return new Promise((resolve ,reject)=>{
      const reader = new FileReader()
      reader.readAsDataURL(file) // read the URL of the file
      reader.onload=()=>resolve(reader.result) // now it shows the output or result 
      reader.onerror = error=>reject(error) // or else if error occured reflect the error 
    })
  }
const formatInterviewDateTime= (dateStr: any) => {
  const date = new Date(dateStr);
  
  return date.toLocaleDateString('en-US',{
     year: 'numeric',
      month: 'long',
       day: 'numeric',
       hour :'numeric',
       minute : 'numeric',
       hour12 : true
     });
}
function openBase64PdfInNewTab(base64String :string) {
  // Remove prefix if exists
  if (base64String.startsWith('data:application/pdf;base64,')) {
    base64String = base64String.replace('data:application/pdf;base64,', '');
  }

  // Convert base64 to byte array
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create Blob and URL
  const blob = new Blob([byteArray], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);

  // Open in new tab
  window.open(blobUrl, '_blank');
}



export  {formatDate, timeAgo , getBase64 , formatInterviewDateTime , openBase64PdfInNewTab} 