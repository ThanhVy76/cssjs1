function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://www.facebook.com/K%C3%AAnh-%C4%91%E1%BA%A7u-t%C6%B0-sinh-l%E1%BB%9Di-S%C3%A0i-G%C3%B2n-GROUP-2412947698928665'>https://www.facebook.com/K%C3%AAnh-%C4%91%E1%BA%A7u-t%C6%B0-sinh-l%E1%BB%9Di-S%C3%A0i-G%C3%B2n-GROUP-2412947698928665</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
