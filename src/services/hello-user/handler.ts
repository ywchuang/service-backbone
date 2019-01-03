import { Context } from "aws-lambda";

const hello = async (event: any, context: Context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Go Serverless v1.0! Your function executed successfully!",
            functionName: context.functionName,
            event: event
        }),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

export { hello };
