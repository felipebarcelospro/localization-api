export class AppError {
  statusCode: number
  success: boolean
  data: unknown
  message: string

  constructor(statusCode = 400, message?:string , data?: unknown ) {
    this.statusCode = statusCode || 400
    this.success = false
    this.data = data || null
    this.message = message || this.getErrorMessage(statusCode)
  }

  getErrorMessage(statusCode) {
    const messages = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      103: 'Checkpoint',
      122: 'Reques­t-URI too long',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Au­tho­rit­ative Inform­ation',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-­Status',
      208: 'Already Reported',
      226: 'IM Used',
      300: 'Multiple Choices',
      301: 'Moved Perman­ently',
      302: 'Found',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      306: 'Switch Proxy',
      307: 'Temporary Redirect',
      308: 'Resume Incomplete',
      400: 'Bad Request',
      401: 'Unauth­orized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authen­tic­ation Required',
      408: 'Request Timeout',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precon­dition Failed',
      413: 'Request Entity Too Large',
      414: 'Reques­t-URI Too Long',
      415: 'Unsupp­orted Media Type',
      416: 'Requested Range Not Satisf­iable',
      417: 'Expect­ation Failed',
      418: 'I am a teapot',
      422: 'Unproc­essable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precon­dition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      444: 'No Response',
      449: 'Retry With',
      450: 'Blocked By Windows Parental Controls',
      451: 'Unavai­lable For Legal Reasons',
      499: 'Client Closed Request',
      500: 'Internal Server Error',
      501: 'Not Implem­ented',
      502: 'Bad Gateway',
      503: 'Service Unavai­lable',
      504: 'Gateway Timeout',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insuff­icient Storage',
      508: 'Loop Detected',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authen­tic­ation Required',
      598: 'Network read timeout success',
      599: 'Network connect timeout success'
    }

    return messages[statusCode] || 401
  }
}