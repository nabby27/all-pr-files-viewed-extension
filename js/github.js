setPullRequestFilesAsViwed();

function setPullRequestFilesAsViwed() {
    const checkboxes = document.querySelectorAll('input.js-reviewed-checkbox[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked === false) {
            checkbox.click();
        }
    });
}

