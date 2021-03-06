Getir Coding Assignment
=============

This nodejs application has the single **API endpoint api/records** to get the list of records from database:

1. Please follow source code created at GitHub.com: (https://github.com/sureshkallem/getir_coding_challange)
2. Hosted in Heroku and API endpoint is : (https://gentle-plateau-60108.herokuapp.com/api/records)

I have implemented the following features
1. Sort by totalCount
2. MVC Pattern
3. Unit test cases
4. Error Handling
5. Middleware Validations
6. Logging (used console for now)
7. No Authentication
8. Comments and Documentation

Testing
-----------------
1. Make a post call with body 
```
    {
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
    }
```
2. If minCount is not provided -> it will be considered as zero(0) but rest of 3 parameters are mandatory

Installation
-----------

```
npm install 
```

Run in dev mode
-----------

```
npm run dev
```

Run in normal
-----------
```
npm run start
```

Sample JSON Response
-------
#. Input 
```
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
#. Output
```
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "udZfCkvB",
      "createdAt": "2016-05-15T00:36:34.126Z",
      "totalCount": 2701
    },
    {
      "key": "vZZOIiPi",
      "createdAt": "2016-03-02T09:30:26.664Z",
      "totalCount": 2701
    },
    {
      "key": "KYKAKxDr",
      "createdAt": "2016-11-27T00:30:34.725Z",
      "totalCount": 2713
    },
    {
      "key": "uLQICSdH",
      "createdAt": "2016-11-23T23:55:44.449Z",
      "totalCount": 2716
    },
    {
      "key": "HJGWkdmD",
      "createdAt": "2016-06-08T13:28:10.965Z",
      "totalCount": 2718
    },
    {
      "key": "nfzwhnJm",
      "createdAt": "2016-05-15T23:21:00.153Z",
      "totalCount": 2719
    },
    {
      "key": "rtKEKONd",
      "createdAt": "2016-11-04T17:16:08.542Z",
      "totalCount": 2723
    },
    {
      "key": "zZBGKskQ",
      "createdAt": "2016-06-30T01:39:35.456Z",
      "totalCount": 2730
    },
    {
      "key": "buCwWkpp",
      "createdAt": "2016-04-19T11:00:36.397Z",
      "totalCount": 2731
    },
    {
      "key": "UlDFSFPv",
      "createdAt": "2016-03-02T09:30:11.209Z",
      "totalCount": 2735
    },
    {
      "key": "DIalotCF",
      "createdAt": "2016-06-06T02:00:18.387Z",
      "totalCount": 2744
    },
    {
      "key": "cUZMtDFd",
      "createdAt": "2016-08-22T07:54:11.729Z",
      "totalCount": 2759
    },
    {
      "key": "IAuxBQIS",
      "createdAt": "2016-11-25T17:55:12.341Z",
      "totalCount": 2769
    },
    {
      "key": "pxClAvll",
      "createdAt": "2016-12-19T10:00:40.050Z",
      "totalCount": 2772
    },
    {
      "key": "plaqeWiK",
      "createdAt": "2016-11-20T07:45:28.618Z",
      "totalCount": 2773
    },
    {
      "key": "yoDNIfdV",
      "createdAt": "2016-09-02T22:47:37.049Z",
      "totalCount": 2780
    },
    {
      "key": "brcWXLkc",
      "createdAt": "2016-08-22T09:16:07.431Z",
      "totalCount": 2780
    },
    {
      "key": "dcJUSDLR",
      "createdAt": "2016-02-27T16:12:30.813Z",
      "totalCount": 2780
    },
    {
      "key": "xwqjExMK",
      "createdAt": "2016-03-27T09:36:31.788Z",
      "totalCount": 2783
    },
    {
      "key": "kzSqsBrJ",
      "createdAt": "2016-12-02T15:07:30.465Z",
      "totalCount": 2803
    },
    {
      "key": "NOdGNUDn",
      "createdAt": "2016-01-28T07:10:33.558Z",
      "totalCount": 2813
    },
    {
      "key": "mVHGbEap",
      "createdAt": "2016-04-11T03:16:28.581Z",
      "totalCount": 2853
    },
    {
      "key": "YUhMrgmc",
      "createdAt": "2016-09-25T09:55:20.813Z",
      "totalCount": 2862
    },
    {
      "key": "LRgJxDop",
      "createdAt": "2016-06-10T21:40:36.359Z",
      "totalCount": 2863
    },
    {
      "key": "wIFZewQA",
      "createdAt": "2016-03-18T23:32:55.236Z",
      "totalCount": 2863
    },
    {
      "key": "tyqnxHZh",
      "createdAt": "2016-11-25T14:14:46.048Z",
      "totalCount": 2872
    },
    {
      "key": "gtOhweII",
      "createdAt": "2016-09-27T16:51:55.223Z",
      "totalCount": 2878
    },
    {
      "key": "wtSjVcpg",
      "createdAt": "2016-02-22T11:13:43.165Z",
      "totalCount": 2888
    },
    {
      "key": "ibfRLaFT",
      "createdAt": "2016-12-25T16:43:27.909Z",
      "totalCount": 2892
    },
    {
      "key": "ohsXfpHi",
      "createdAt": "2016-03-30T20:01:01.948Z",
      "totalCount": 2894
    },
    {
      "key": "XCiSazeS",
      "createdAt": "2016-12-13T18:58:33.864Z",
      "totalCount": 2906
    },
    {
      "key": "rwghjfLQ",
      "createdAt": "2016-03-17T11:07:46.355Z",
      "totalCount": 2907
    },
    {
      "key": "HmsYvNTB",
      "createdAt": "2016-06-12T21:50:44.088Z",
      "totalCount": 2917
    },
    {
      "key": "eaeVCokN",
      "createdAt": "2016-07-14T01:45:13.255Z",
      "totalCount": 2920
    },
    {
      "key": "fEWwrjug",
      "createdAt": "2016-10-30T22:49:27.236Z",
      "totalCount": 2935
    },
    {
      "key": "MhXsNtaT",
      "createdAt": "2016-04-17T01:06:48.972Z",
      "totalCount": 2942
    },
    {
      "key": "UYOsBBSI",
      "createdAt": "2016-02-14T15:31:29.518Z",
      "totalCount": 2948
    },
    {
      "key": "UFYsJHDM",
      "createdAt": "2016-09-06T04:08:44.393Z",
      "totalCount": 2951
    },
    {
      "key": "jOjBYTLV",
      "createdAt": "2016-11-13T19:54:23.677Z",
      "totalCount": 2954
    },
    {
      "key": "dNzXijip",
      "createdAt": "2016-10-05T21:39:15.288Z",
      "totalCount": 2963
    },
    {
      "key": "plSuXweN",
      "createdAt": "2016-10-25T11:36:28.069Z",
      "totalCount": 2970
    },
    {
      "key": "VAbAYJgn",
      "createdAt": "2016-10-24T05:57:07.370Z",
      "totalCount": 2971
    },
    {
      "key": "kxMfldnX",
      "createdAt": "2016-09-21T04:41:32.835Z",
      "totalCount": 2971
    },
    {
      "key": "HYiwsPjw",
      "createdAt": "2016-04-05T17:07:46.062Z",
      "totalCount": 2977
    },
    {
      "key": "kkxEdhft",
      "createdAt": "2016-02-19T06:35:39.409Z",
      "totalCount": 2980
    },
    {
      "key": "wPpaIkGA",
      "createdAt": "2016-06-04T08:07:22.109Z",
      "totalCount": 2987
    },
    {
      "key": "bxoQiSKL",
      "createdAt": "2016-01-29T01:59:53.494Z",
      "totalCount": 2991
    }
  ]
}
```