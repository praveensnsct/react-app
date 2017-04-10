/**
 * Created by pthirumurugan on 4/10/17.
 */

module.exports.fieldsConfig = {
  fileKey: {
    label: 'File Key',
    grid: {
      type: 'string',
      hyperlinked: {
        type: 'external',
        url: '/fileReceipts/',
        fieldUrl: 'fileKey'
      },
      subString: 5,
      width: 200
    }
  },
  receivedTime: {
    label: 'Received Date',
    grid: {
      type: 'string',
      viewType: 'date',
      highlight: false,
      width: 200
    }
  },
  originalFileName: {
    label: 'Orig. Name',
    grid: {
      type: 'string',
      subString: 5,
      width: 200
    }
  },
  processedFileName: {
    label: 'File Name',
    grid: {
      type: 'string',
      subString: 5,
      ellipsis: true,
      tooltip: true,
      width: 200
    }
  },
  processedTime: {
    label: 'Imported Date',
    grid: {
      type: 'string',
      viewType: 'date',
      highlight: true,
      width: 200
    }
  },
  importStatus: {
    label: 'Status',
    grid: {
      type: 'string',
      width: 150
    }
  }
};