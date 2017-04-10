const azure   = require("azure-storage");
const assert  = require("assert");
const q       = require("q");

const Queue = function({queueName = process.env.AZURE_QUEUE_NAME || 'default_queue', 
						storageAccount = process.env.AZURE_STORAGE_ACCOUNT,
						storageKey = process.env.AZURE_STORAGE_KEY} = {}) {
	let self = this;

	// assert.ok(storageAccount, 'Azure Storage Account Not Provided');
	assert.ok(storageKey, 'Azure Storage Key Not Provided');
	


    // SendMessageWithMetaData
    // self.sendMessageWithMetaData = function(msgType, msgData, msgMeta, options) {
	// 		let deferred = q.defer();

	// 		// generate the client
	// 		let retryOperations = new azure.ExponentialRetryPolicyFilter();
	// 		let queueService = azure.createQueueService(storageKey, storageSecret);


	// 		return deferred.promise;
    // };

    // SendMessage




    // GetMessage


    // 


	return self;
}

module.exports = Queue;