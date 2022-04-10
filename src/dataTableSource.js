export const userColumns = [
    // {
    //     field: "_id",
    //     headerName: "ID",
    //     width: 160
    // },
    {
        field: "name",
        headerName: "User",
        width: 250,
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.name}
                </div>

            )
        }
    },
    {
        field: "subDomain",
        headerName: "Sub-Domain",
        width: 100
    },
    {
        field: "subscription",
        headerName: "Subscription",
        width: 110
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
        field: "from",
        headerName: "From",
        width: 120
    },
    {
        field: "detailsByIp",
        headerName: "Country",
        width: 110,
        renderCell: (params) => {
            return(
                <div className="">
                    {params.row.detailsByIp.country_name} 
                </div>

            )
        }
    },
    {
        field: "earning",
        headerName: "Earnings",
        width: 120,
        renderCell: (params) => {
            return(
                <div className="">
                   {params.row.earning.totalEarning} || {params.row.earning.totalAvailableEarning} 
                </div>

            )
        }
    },
]

export const userRows = [
    {
        _id: "wf36d4bd6sh5",
        name: "Phunsuk Waangdu",
        img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        subDomain: "abc",
        subscription: "Yes",
        from: "AppSumo",
        detailsByIp: {
            country_name: "Japan"
        },
        earning: {
            totalAvailableEarning: 100,
            totalEarning: 500
        },
        status: "active"
    },
    {
        _id: "wf36d4bd6sh4",
        name: "Phunsuk Waangdu",
        img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        subDomain: "abc",
        subscription: "Yes",
        from: "AppSumo",
        detailsByIp: {
            country_name: "Japan"
        },
        earning: {
            totalAvailableEarning: 100,
            totalEarning: 500
        },
        status: "cancelled"
    },
    {
        _id: "wf36d4bd6sh3",
        name: "Phunsuk Waangdu",
        img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        subDomain: "abc",
        subscription: "Yes",
        from: "AppSumo",
        detailsByIp: {
            country_name: "Japan"
        },
        earning: {
            totalAvailableEarning: 100,
            totalEarning: 500
        },
        status: "active"
    },
    {
        _id: "wf36d4bd6sh2",
        name: "Phunsuk Waangdu",
        img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        subDomain: "abc",
        subscription: "Yes",
        from: "AppSumo",
        detailsByIp: {
            country_name: "Japan"
        },
        earning: {
            totalAvailableEarning: 100,
            totalEarning: 500
        },
        status: "cancelled"
    },
    {
        _id: "wf36d4bd6sh1",
        name: "Phunsuk Waangdu",
        img: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        subDomain: "abc",
        subscription: "Yes",
        from: "AppSumo",
        detailsByIp: {
            country_name: "Japan"
        },
        earning: {
            totalAvailableEarning: 100,
            totalEarning: 500
        },
        status: "active"
    },
]
