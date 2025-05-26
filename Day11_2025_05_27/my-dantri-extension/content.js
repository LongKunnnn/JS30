function changeArticleTitle() {
    let titleElement = document.querySelector('h1.title-page, h1.title-detail');

    if (titleElement) {
        titleElement.textContent = "Tiêu đề bài báo mới của Dân trí đã được thay đổi heheehe";
        console.log("Tiêu đề bài báo đã được thay đổi");
        document.title = 'Tiêu đề mới - Dân trí';
    } else {
        console.log('Không tìm thấy phần tử tiêu đề bài báo để thay đổi');

    }
}

document.addEventListener('DOMContentLoaded' , function() {
    changeArticleTitle();
});