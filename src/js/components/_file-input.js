const fileInputs = document.querySelectorAll('.file-input');

const createFileListItem = (file, fileInput, fileList, currentFiles) => {
  const listItem = document.createElement('li');
  listItem.className = 'file-input__item';

  const fileName = document.createElement('span');
  fileName.className = 'file-input__name';
  fileName.textContent = file.name;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'file-input__delete';
  deleteButton.type = 'button';
  deleteButton.setAttribute('aria-label', 'Удалить файл');

  deleteButton.addEventListener('click', () => {
    listItem.remove();

    const index = currentFiles.indexOf(file);
    if (index > -1) {
      currentFiles.splice(index, 1);
    }

    if (currentFiles.length === 0) {
      fileList.classList.add('hidden');
    }

    fileInput.value = '';
  });

  listItem.appendChild(fileName);
  listItem.appendChild(deleteButton);

  return listItem;
};

const setFileInputs = () => {
  if (!fileInputs || !fileInputs.length) return;

  fileInputs.forEach((group) => {
    const fileInput = group.querySelector('input[type="file"]');
    const fileList = group.querySelector('ul');

    let currentFiles = [];

    fileInput.addEventListener('change', (evt) => {
      const files = Array.from(evt.target.files);

      if (files.length > 0) {
        currentFiles.push(...files);

        fileList.innerHTML = '';
        currentFiles.forEach((file) => {
          const listItem = createFileListItem(file, fileInput, fileList, currentFiles);
          fileList.appendChild(listItem);
        });

        fileList.classList.remove('hidden');

        fileInput.value = '';
      }
    });
  });
};

export { setFileInputs };
