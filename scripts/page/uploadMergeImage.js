console.log("js uploadMergeImage init");

$(document).ready(function() {
   $("#uploadImage").on("change",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
        $(tip).text("");
        $("#fileName").val = "";
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        console.log(fileName)
        $("#fileName").val(fileName);
        $("#tip").text("檔案格式正確");
        $("#tip").css('color','green');
    }else{
        $("#tip").text("檔案格式不正確");
        $("#tip").css('color','red');
    }})
});