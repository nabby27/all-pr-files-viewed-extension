setPullRequestFilesAsViwed();

function setPullRequestFilesAsViwed() {
    const checkboxes = document.querySelectorAll('[data-testid="fileReviewCheckbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked === false) {
            checkbox.click();
        }
    });
}
