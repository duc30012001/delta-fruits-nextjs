export const advertisements = [
    {
        id: 0,
        name: "top-ads",
        detail: [
            {
                image: require("../static/images/home/slider_1.png"),
                content: "",
                url: "#",
            },
        ],
    },
    {
        id: 1,
        name: "center-ads",
        detail: [
            {
                image: require("../static/images/home/banner_bestsale.png"),
                content: "",
                url: "#",
            },
        ],
    },
    {
        id: 2,
        name: "deals",
        detail: [
            {
                image: require("../static/images/home/banner_vertical_1.png"),
                content: '<p>TRÁI CÂY</p><p class="bold">NHẬP KHẨU</p><p>AN TOÀN</p><p class="large">GIẢM TỚI 50%</p>',
                url: "#",
            },
            {
                image: require("../static/images/home/banner_vertical_2.png"),
                content: '<p>Nước trái cây</p><p class="bold">100% TỪ</p><p>THIÊN NHIÊN</p><p class="large">SIÊU SẠCH</p>',
                url: "#",
            },
        ],
    },
    {
        id: 3,
        name: "center-ads-2",
        detail: [
            {
                image: require("../static/images/home/banner_1.png"),
                content: "",
                url: "#",
            },
            {
                image: require("../static/images/home/banner_2.png"),
                content: "",
                url: "#",
            },
            {
                image: require("../static/images/home/banner_3.png"),
                content: "",
                url: "#",
            },
        ],
    },
];

export const catalogues = [
    {
        id: 1,
        name: "Giá tốt mỗi ngày",
        products: [3, 4],
    },
    {
        id: 2,
        name: "Sản phẩm bán chạy",
        products: [1, 2, 3, 4, 5, 6],
    },
    {
        id: 3,
        name: "Sản phẩm mới về",
        products: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
        id: 4,
        name: "Gợi ý cho bạn",
        products: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
        id: 5,
        name: "Loại quả nổi bật",
        products: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
        id: 6,
        name: "Hoa quả ưa chuộng",
        products: [1, 2, 3, 4, 5, 6, 7, 8],
    },
];

//  TYPE = 0: PRODUCTS   TYPE = 1: NEWS
export const categories = [
    {
        id: 0,
        root: "products",
        type: 0,
        name: "Tất cả sản phẩm",
        products: [1, 2, 3, 4, 5, 6, 7, 8],
        parentId: 0,
    },
    {
        id: 1,
        root: "san-pham-noi-bat",
        type: 0,
        name: "Sản phẩm nổi bật",
        products: [1, 2, 3],
        parentId: 0,
    },
    {
        id: 2,
        root: "san-pham-khuyen-mai",
        type: 0,
        name: "Sản phẩm khuyến mãi",
        products: [3, 4, 5, 6, 7, 8],
        parentId: 0,
    },
    {
        id: 3,
        root: "san-pham-ban-chay",
        type: 0,
        name: "Sản phẩm bán chạy",
        products: [1, 2, 3, 4],
        parentId: 0,
    },
    {
        id: 4,
        root: "trai-cay-nhap-khau",
        type: 0,
        name: "Trái cây nhập khẩu",
        products: [1, 2, 3],
        parentId: 0,
    },
    {
        id: 5,
        root: "rau-cu-nhap-khau",
        type: 0,
        name: "Rau, củ nhập khẩu",
        products: [6, 7, 8],
        parentId: 0,
    },
    {
        id: 6,
        root: "hoa-qua-kho",
        type: 0,
        name: "Hoa quả khô",
        products: [1, 2],
        parentId: 0,
    },
    {
        id: 7,
        root: "hoa-qua-khac",
        type: 0,
        name: "Hoa quả khác",
        products: [],
        parentId: 0,
    },
    {
        id: 8,
        root: "hoa-qua-say",
        type: 0,
        name: "Hoa quả sấy",
        products: [],
        parentId: 7,
    },
    {
        id: 9,
        root: "hoa-qua-lanh",
        type: 0,
        name: "Hoa quả lạnh",
        products: [],
        parentId: 7,
    },
];

export const dataFooter = [
    {
        id: 1,
        title: "Chính sách",
        list: [
            {
                id: 1,
                name: "Trang chủ",
                url: "/",
            },
            {
                id: 2,
                name: "Sản phẩm",
                url: "/products",
            },
            {
                id: 3,
                name: "Tin tức",
                url: "/news",
            },
            {
                id: 4,
                name: "Giới thiệu",
                url: "/introduce",
            },
            {
                id: 5,
                name: "Liên hệ",
                url: "/contact",
            },
        ],
    },
    {
        id: 2,
        title: "Thông tin",
        list: [
            {
                id: 1,
                name: "Trang chủ",
                url: "/",
            },
            {
                id: 2,
                name: "Sản phẩm",
                url: "/products",
            },
            {
                id: 3,
                name: "Tin tức",
                url: "/news",
            },
            {
                id: 4,
                name: "Giới thiệu",
                url: "/introduce",
            },
            {
                id: 5,
                name: "Liên hệ",
                url: "/contact",
            },
        ],
    },
    {
        id: 3,
        title: "Hướng dẫn",
        list: [
            {
                id: 1,
                name: "Trang chủ",
                url: "/",
            },
            {
                id: 2,
                name: "Sản phẩm",
                url: "/products",
            },
            {
                id: 3,
                name: "Tin tức",
                url: "/news",
            },
            {
                id: 4,
                name: "Giới thiệu",
                url: "/introduce",
            },
            {
                id: 5,
                name: "Liên hệ",
                url: "/contact",
            },
        ],
    },
    {
        id: 4,
        title: "Instagram",
        list: [
            {
                id: 1,
                name: "Trang chủ",
                url: "/",
            },
            {
                id: 2,
                name: "Sản phẩm",
                url: "/products",
            },
            {
                id: 3,
                name: "Tin tức",
                url: "/news",
            },
            {
                id: 4,
                name: "Giới thiệu",
                url: "/introduce",
            },
            {
                id: 5,
                name: "Liên hệ",
                url: "/contact",
            },
        ],
    },
];

export const dataMenu = [
    {
        id: 1,
        url: "/",
        name: "Trang chủ",
        parentId: 0,
        children: [],
    },
    {
        id: 2,
        url: "/products",
        name: "Sản phẩm",
        parentId: 0,
        children: [
            {
                id: 6,
                url: "/san-pham-noi-bat",
                name: "Sản phẩm nổi bật",
                parentId: 2,
                children: [],
            },
            {
                id: 7,
                url: "/san-pham-khuyen-mai",
                name: "Sản phẩm khuyến mãi",
                parentId: 2,
                children: [],
            },
            {
                id: 8,
                url: "/san-pham-ban-chay",
                name: "Sản phẩm bán chạy",
                parentId: 2,
                children: [],
            },
            {
                id: 9,
                url: "/trai-cay-nhap-khau",
                name: "Trái cây nhập khẩu",
                parentId: 2,
                children: [],
            },
            {
                id: 10,
                url: "/rau-cu-nhap-khau",
                name: "Rau, củ nhập khẩu",
                parentId: 2,
                children: [],
            },
            {
                id: 11,
                url: "/hoa-qua-kho",
                name: "Hoa quả khô",
                parentId: 2,
                children: [],
            },
            {
                id: 12,
                url: "/hoa-qua-khac",
                name: "Hoa quả khác",
                parentId: 2,
                children: [
                    {
                        id: 13,
                        url: "/hoa-qua-say",
                        name: "Hoa quả sấy",
                        parentId: 12,
                        children: [],
                    },
                    {
                        id: 14,
                        url: "/hoa-qua-lanh",
                        name: "Hoa quả lạnh",
                        parentId: 12,
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        url: "/news",
        name: "Tin tức",
        parentId: 0,
        children: [],
    },
    {
        id: 4,
        url: "/introduce",
        name: "Giới thiệu",
        parentId: 0,
        children: [],
    },
    {
        id: 5,
        url: "/contact",
        name: "Liên hệ",
        parentId: 0,
        children: [],
    },
];

export const information = {
    logo: require("../static/images/logo.png"),
    title: "Chào mừng bạn đến với Delta Fruits",
    contact: {
        id: 8,
        name: "Thông tin liên hệ",
        description:
            "Công ty cổ phần thực phẩm trực tuyến Delta Fruits là một trong các đơn vị cung cấp thực phẩm, rau củ quả sạch nhập khẩu số 1 tại Việt Nam.",
        phone: "1900 6750",
        address: "An Thượng, Hà Nội, Vietnam",
        email: "deltawebltd@gmail.com",
        social: [
            {
                name: "Facebook",
                url: "/",
            },
            {
                name: "Instagram",
                url: "/",
            },
            {
                name: "Twitter",
                url: "/",
            },
            {
                name: "Google",
                url: "/",
            },
            {
                name: "Youtube",
                url: "/",
            },
        ],
    },
    introduce: {
        id: 9,
        name: "Giới thiệu",
        content:
            "<p>Delta Fruits là template website&nbsp;bán lẻ Hoa Quả Nhập Khẩu của&nbsp;Delta Web Team&nbsp;Việt Nam, với hơn 10 năm hoạt động trong lĩnh vực nhập khẩu và phân phối hoa quả từ các nước trên thế giới như Mỹ, Úc, New Zealand, ChiLe, ... Delta Fruits đã có hàng nghìn bạn hàng từ bắc vào nam, sang cả Lào và Campuchia, vì vậy V-Food hoàn toàn hiểu rõ về các đặc tính của từng loại sản phẩm, từng mùa vụ và cách bảo quản cũng như sử dụng tốt nhất cho từng loại trái cây.</p><p>Sau nhiều năm bán buôn, đội ngũ lãnh đạo của Delta Fruits đã quyết định thành lập thương hiệu bán lẻ Hoa Quả Nhập Khẩu vào năm 2010, với cửa hàng đầu tiên ở 22 Hàng Muối với mong muốn đưa tới NGƯỜI TIÊU DÙNG những trái cây ngon trên toàn thế giới với chất lượng được đảm bảo, có nguồn gốc xuất xứ rõ ràng và quan trọng nhất giá phải rẻ nhất cho người tiêu dùng.</p><p>Với cửa hàng phục vụ khách hàng một cách chân thành nhất và luôn mang lại cho khách hàng sự tin cậy nhờ luôn thực hiện đúng các cam kết về chất lượng hàng hóa luôn tươi ngon, có nguồn gốc rõ ràng, giá luôn thấp nhất thị trường nên đã được đông đảo khách hàng biết đến .</p><p>Hầu như cửa hàng không sử dụng bất cứ một hình thức quảng cáo nào với mục đích bằng việc khẳng định chất lượng hàng hóa và phong cách phục vụ của mình rồi các khách hàng sẽ tự tìm đến với mình, quả thật là như vậy vì chỉ trong một thời gian ngắn cửa hàng Hoa Quả Nhập Khẩu đã được nhiều người biết đến ở khắp thành hố Hà Nội, trở thành một trong các từ khóa được Google đề xuất khi quý khách muốn tìm kiếm địa chỉ Hoa Quả Nhập Khẩu trên trang tìm kiếm của Google.</p><p>Đã kinh doanh thì tất nhiên một công ty, cá nhân nào cũng muốn muốn có lợi nhuận tối đa và càng cao càng tốt nhưng ở Delta Fruits&nbsp;đội ngũ Ban Lãnh Đạo không đặt lợi nhuận lên hàng đầu mà đặt lợi ích về SỨC KHỎE, quyền được sử dụng các loại trái cây TƯƠI NGON, có NGUỒN GỐC xuất xứ với GIÁ RẺ mà tất cả mọi người đều có thể mua được mới là hàng đầu.&nbsp;</p>",
    },
};

export const news = {
    articles: [
        {
            id: 1,
            path: "/news/meo-chon-dua-hau-ngon-tram-qua-nhu-mot",
            image: require("../static/images/news/dua-hau-41-800x600.png"),
            title: "Mẹo chọn dưa hấu ngon trăm quả như một",
            des: "Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>&nbsp;Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu không chọn khéo, bạn dễ mua phải quả dưa non, cùi dày, không ngọt. Mẹo chọn dưa hấu ngon, trăm quả như một trong bài viết dưới đây sẽ khiến bạn tự tin hơn khi mua thứ quả này.</p><p>Dưa càng chín thì vỏ dưa càng nhẵn. Với loại có vân thì các vân phải rõ ràng. Nếu quả vỏ đen thì màu sắc phải đen sẫm, có ánh. Ngoài ra, để biết chất lượng bên trong quả dưa, nên dùng ngón tay ấn vào vỏ dưa. Nếu quả dưa cứng là loại chất lượng, nếu vỏ mềm thì không nên mua.</p><p>Dùng tay vỗ vào quả dưa, nếu quả dưa phát ra tiếng kêu đanh, chắc là dưa già, dưa chín. Nếu quả dưa phát ra tiếng nhẹ, bộp bộp là quả dưa bị non, hoặc chín nẫu bên trong.</p><p>Dưa đã chín là dưa có cuống khô, héo. Nếu cuống dưa màu xanh lá, quả dưa này đã được hái quá sớm và chưa chín.</p><p><strong>Núm dưa</strong></p><p>Núm của quả dưa hấu ngon thường tròn đều và hơi lõm xuống.</p><p><strong>Cân nặng</strong></p><p>Khi chọn dưa hấu, hãy nhấc quả dưa lên và áng chừng cân nặng. Quả nào càng nhỏ mà càng nặng thì chứng tỏ quả dưa đó càng già, ngon, mọng nước. Nếu dưa nhẹ hơn so với khoảng ước lượng thì không nên mua vì rất có thể đó sẽ là quả dưa bị xốp.</p><p>Đây là khu vực thường tiếp xúc với mặt đất nên hay có màu vàng. Nếu chúng có màu vàng hoặc vàng cam chứ không phải màu trắng, đó là quả dưa hấu ngon.</p>",
            tags: [
                { url: "/news", name: "tư vấn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 2,
            path: "/news/chuyen-gia-huong-dan-chon-rau-cu-qua-an-toan",
            image: require("../static/images/news/cach-nhan-biet-rau-an-toan-0.png"),
            title: "Chuyên gia hướng dẫn chọn rau, củ, quả an toàn",
            des: "Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực vật ngoài danh mục để rau, củ lớn nhanh, đẹp mắt nhằm thu lợi bất chính, mặc sức khỏe người tiêu dùng.</p><p>Để tự bảo vệ sức khỏe mình, người tiêu dùng nên thực hiện những hướng dẫn dưới đây của bà&nbsp;<b>Nguyễn Thị Lệ Thoa</b>, Trưởng phòng Quản lý an toàn thực phẩm thuộc Chi cục Bảo vệ thực vật TP.HCM, khi chọn lựa mua rau, củ, quả.</p><p><b>Về nguồn gốc và hình thức trưng bày</b></p><ul><li>Nên chọn những sản phẩm có nguồn gốc từ các đơn vị được cấp giấy chứng nhận đủ điều kiện sản xuất, sơ chế rau, quả an toàn hoặc giấy chứng nhận VietGAP (giấy chứng nhận phù hợp với tiêu chuẩn GAP khác).</li><li>Nên chọn những sản phẩm rau quả có bao gói, thùng chứa, dây buộc hợp vệ sinh. Trên bao bì hoặc nhãn gắn trực tiếp vào từng sản phẩm tối thiểu phải có các thông tin của nhà sản xuất, nhà cung cấp.</li><li>Nên lựa chọn thực phẩm ở những nơi cung cấp uy tín. Chọn thực phẩm tươi mới, không bị dập nát.</li></ul><p>&nbsp;Mùa khô nguy cơ ô nhiễm dư lượng thuốc bảo vệ thực vật trong rau sẽ cao hơn mùa mưa.</p><ul><li>Nên chọn rau vào vụ chính, là thời điểm cây trồng phát triển bình thường, ít bị sâu bệnh, dẫn đến số lần sử dụng thuốc bảo vệ thực và phân bón ít.&nbsp;</li><li>Ở vụ nghịch,&nbsp;để đạt năng suất cao phải sử dụng thuốc bảo vệ thực vật và phân bón nhiều, nên rau có khả năng có dư lượng thuốc bảo vệ, phân bón hóa học vượt quá giới hạn cho phép.</li></ul><p><i>Rau muống:</i>&nbsp;Không nên mua những bó rau có cọng to hơn bình thường, rau giòn, lá màu xanh đen, nhìn nghiêng mặt trên của lá rau rất bóng và mướt. Khi nước luộc rau này nguội, nước sẽ biến thành màu xanh đen và có vẩn kết tủa đen; khi ăn xong, nếu tinh ý ta nhận thấy có vị chát.</p><p><i>&nbsp;Rau bí (ngọn và lá của cây bí ngô):</i>&nbsp;Không nên mua bó rau có ngọn dài, khoảng cách giữa các lóng xa nhau (ngọn vươn dài), tay cuống mập và ngắn, ít lông tơ, ngọn bí màu xanh nhạt, lá màu xanh đen...</p><p><i>Rau cần:&nbsp;</i>Khi thấy thân rau to, ngó rau trắng ngần, rau nhanh bị héo thì không nên mua. Nếu để đến ngày hôm sau thì rau héo úa, thân khô tóp lại nhăn nheo, khi xào nấu lá rau biến màu xanh đen.</p><p><i>Đối với củ quả:</i>&nbsp;Không nên chọn những trái quá lớn, mà chọn những trái có kích thước vừa phải hoặc hơi nhỏ. Không chọn những trái da căng và có vết nứt dọc theo thân, những trái da xanh bóng.</p><p>&nbsp;</p>",
            tags: [
                { url: "/news", name: "rau sạch" },
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "lựa chọn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 3,
            path: "/news/7-cach-chon-hoa-qua-tuoi-ngon-nhat",
            image: require("../static/images/news/nav-fruits.png"),
            title: "7 Cách chọn hoa quả tươi ngon nhất",
            des: "Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo, chọ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo,&nbsp; chọn các quả có nhiều mảng sẫm màu hơn, do mặt trời gây ra ở lớp vỏ ngoài. Đường được tích tụ ở những vùng này sẽ khiến quả đào ngọt hơn. Bạn cũng nên chọn các quả đào có một đường hằn ngang qua phần cuống để được thưởng thức trọn vẹn hương vị đặc trưng của loại trái cây này.</p><p><strong>Bơ</strong></p><p>Hãy nhìn xuống phần phía dưới hõm cuống của quả bơ. Màu nâu sẽ đồng nghĩa với quả bơ đã chín nẫu bên trong. Màu xanh lục ám chỉ quả bơ đã chín và đến độ ăn ngon.</p><p><strong>Xoài</strong></p><p>Màu sắc không phải luôn luôn báo hiệu tình trạng chín của các quả xoài. Xoài chín sẽ có mùi thơm, nên hãy dùng mũi của bạn để chọn được quả xoài ưng ý.</p><p><strong>Dưa hấu</strong></p><p>Hãy chọn quả dưa hấu cho cảm giác nặng so với kích cỡ của nó. Mảng màu vàng trên lớp vỏ giáp đất cũng báo hiệu quả dưa đã chín. Hãy vỗ vào quả dưa để cách xa tai bạn khoảng 5cm, nếu bạn nghe thấy tiếng kêu trầm đục là dưa chín, không bị xốp.</p><p><strong>Táo</strong></p><p>Dù màu sắc của quả táo như thế nào, lớp vỏ ngoài của nó cũng cần sáng bóng và trơn phẳng, không bị bầm dập hoặc nhăn nheo. Loại táo xanh có vị chua và thích hợp để làm bánh nướng, trong khi hai loại táo Gala và Fuji ngọt hơn, thích hợp để ăn.</p><p><strong>Dưa vàng</strong></p><p>Cần tránh chọn các quả dưa vàng có vỏ quá xanh. Hãy kiểm tra độ mềm, báo hiệu tình trạng chín của quả dưa ở phần cuống, Bạn cũng cần tránh lựa các quả dưa có lớp vỏ ngoài bị trầy xước.</p><p><strong>Cam</strong></p><p>Các quả cam nặng hơn sẽ mọng nước hơn. Trong khi đó, các điểm màu sẫm hoặc sáng ở lớp vỏ có thể ám chỉ sự hư hại trong quá trình vận chuyển cam. Nắn vỏ cam để đảm bảo rằng nó không bị tách rời khỏi phần bên trong. Cam tươi ngon sẽ có mùi thơm ở phần cuống.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 4,
            path: "/news/13-cong-dung-it-biet-cua-bap-cai",
            image: require("..//static/images/news/healthiest-fruits-to-eat.png"),
            title: "13 công dụng ít biết của bắp cải",
            des: "Thành phần dinh dưỡng và lượng vitamin trong bắp cải nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ng...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Thành phần dinh dưỡng và lượng vitamin trong&nbsp;bắp cải&nbsp;nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ngoài ra, vitamin A và P trong cải bắp kết hợp với nhau làm cho thành mạch máu bền vững hơn.</p><p>Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:</p><p><strong>Giúp hình thành các tế bào hồng cầu</strong></p><p>Sắt là một thành phần giúp thúc đẩy quá trình hình thành của các tế bào hồng cầu, do đó tránh được các triệu chứng của bệnh thiếu máu. Tiêu thụ cải bắp kết hợp với nước cam hoặc nước bưởi có khả năng tối ưu hóa sự hấp thụ chất sắt từ bắp cải.</p><p><strong>Ngăn ngừa ung thư</strong></p><p>Bắp cải và các loại rau cùng họ có chứa một chất có thể chống lại tế bào ung thư trong cơ thể. Chúng là những chất kích thích các enzym để kiềm chế tốc độ tăng trưởng khối u.</p><p>Nghiên cứu ở Trung Quốc cũng chỉ ra rằng những phụ nữ tiêu thụ một số lượng nhất định các loại rau như bắp cải, bông cải xanh giảm nguy cơ của các triệu chứng ung thư vú.</p><p><strong>Tốt cho tim mạch</strong></p><p>Rau bắp cải có tác dụng gì khác nữa ? Hàm lượng kali trong bắp cải rất nhiều, tốt cho sức khỏe tim mạch và duy trì lưu thông máu khỏe mạnh đồng thời tránh tắc nghẽn các mạch máu đến tim. Kali cũng là một hợp chất tốt để làm giảm các triệu chứng của bệnh tăng huyết áp.</p><p>Hàm lượng kali cao trong bắp cải là một trong những loại thực phẩm được khuyến cáo tốt cho bệnh tăng huyết áp.</p><p><strong>Tăng cường miễn dịch</strong></p><p>Không chỉ trái cây như cam, nho hoặc táo mới có nhiều vitamin C, trong bắp cải cũng có rất nhiều loại vitamin này, do đó công dụng của bắp cải còn là làm cho hệ thống miễn dịch phát triển mạnh hơn. Vitamin C cũng rất tốt cho chăm sóc sức khỏe làn da</p><p><strong>Giảm trọng lượng cơ thể</strong></p><p>Bắp cải là một trong những loại rau tốp đầu được đề nghị cho những người muốn giảm cân một cách tự nhiên lành mạnh. Bắp cải có chứa rất nhiều thành phần hữu ích của vitamin, khoáng chất và chất dinh dưỡng khác.</p><p>Bạn có thể ăn bắp cải với số lượng lớn vì nó có hàm lượng chất xơ đủ cao và ít calo, nó sẽ không làm tăng trọng lượng của bạn.</p><p><strong>Giải độc cơ thể</strong></p><p>Do có chứa hàm lượng vitamin C và lưu huỳnh cao, bắp cải có thể giúp loại bỏ độc tố (gốc tự do). Các gốc tự do là một trong những nguyên nhân chính của bệnh viêm khớp, bệnh ngoài da, bệnh thấp khớp và bệnh gút.</p><p><strong>Tốt cho não</strong></p><p>Bắp cải hoặc các loại rau họ cải là nguồn cung cấp rất nhiều vitamin K và anthocyanin có thể giúp cho sức khỏe tâm thần và sự tập trung của não bộ.</p><p>Các dưỡng chất này cũng có thể ngăn ngừa tổn thương thần kinh, giúp ngăn ngừa bệnh Alzheimer và chứng mất trí. Vì vậy, bắp cải rất có lợi cho sức khỏe não bộ của bạn.</p><p><strong>Tốt cho mắt</strong></p><p>Bắp cải là một nguồn giàu rau quả có chứa beta-carotene. Hầu hết mọi người, đặc biệt là những người có tuổi, thường xuyên ăn bắp cải cho họ khả năng ngăn chặn sự thoái hóa điểm vàng và có thể cải thiện sức khỏe mắt cũng như ngăn ngừa đục thủy tinh thể.</p><p>Chất beta carotene theo một số nghiên cứu có thể giảm ung thư tuyến tiền liệt.</p><p><strong>Chống viêm</strong></p><p>Bắp cải có chất chống viêm và là một nguồn chính glutamine. Glutamine là một chất chống viêm mạnh, vì vậy, ăn bắp cải có thể làm giảm tác dụng của các bệnh như viêm, kích ứng, dị ứng, đau khớp, sốt và các rối loạn về da.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 1,
            path: "/news/meo-chon-dua-hau-ngon-tram-qua-nhu-mot",
            image: require("../static/images/news/dua-hau-41-800x600.png"),
            title: "Mẹo chọn dưa hấu ngon trăm quả như một",
            des: "Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>&nbsp;Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu không chọn khéo, bạn dễ mua phải quả dưa non, cùi dày, không ngọt. Mẹo chọn dưa hấu ngon, trăm quả như một trong bài viết dưới đây sẽ khiến bạn tự tin hơn khi mua thứ quả này.</p><p>Dưa càng chín thì vỏ dưa càng nhẵn. Với loại có vân thì các vân phải rõ ràng. Nếu quả vỏ đen thì màu sắc phải đen sẫm, có ánh. Ngoài ra, để biết chất lượng bên trong quả dưa, nên dùng ngón tay ấn vào vỏ dưa. Nếu quả dưa cứng là loại chất lượng, nếu vỏ mềm thì không nên mua.</p><p>Dùng tay vỗ vào quả dưa, nếu quả dưa phát ra tiếng kêu đanh, chắc là dưa già, dưa chín. Nếu quả dưa phát ra tiếng nhẹ, bộp bộp là quả dưa bị non, hoặc chín nẫu bên trong.</p><p>Dưa đã chín là dưa có cuống khô, héo. Nếu cuống dưa màu xanh lá, quả dưa này đã được hái quá sớm và chưa chín.</p><p><strong>Núm dưa</strong></p><p>Núm của quả dưa hấu ngon thường tròn đều và hơi lõm xuống.</p><p><strong>Cân nặng</strong></p><p>Khi chọn dưa hấu, hãy nhấc quả dưa lên và áng chừng cân nặng. Quả nào càng nhỏ mà càng nặng thì chứng tỏ quả dưa đó càng già, ngon, mọng nước. Nếu dưa nhẹ hơn so với khoảng ước lượng thì không nên mua vì rất có thể đó sẽ là quả dưa bị xốp.</p><p>Đây là khu vực thường tiếp xúc với mặt đất nên hay có màu vàng. Nếu chúng có màu vàng hoặc vàng cam chứ không phải màu trắng, đó là quả dưa hấu ngon.</p>",
            tags: [
                { url: "/news", name: "tư vấn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 2,
            path: "/news/chuyen-gia-huong-dan-chon-rau-cu-qua-an-toan",
            image: require("../static/images/news/cach-nhan-biet-rau-an-toan-0.png"),
            title: "Chuyên gia hướng dẫn chọn rau, củ, quả an toàn",
            des: "Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực vật ngoài danh mục để rau, củ lớn nhanh, đẹp mắt nhằm thu lợi bất chính, mặc sức khỏe người tiêu dùng.</p><p>Để tự bảo vệ sức khỏe mình, người tiêu dùng nên thực hiện những hướng dẫn dưới đây của bà&nbsp;<b>Nguyễn Thị Lệ Thoa</b>, Trưởng phòng Quản lý an toàn thực phẩm thuộc Chi cục Bảo vệ thực vật TP.HCM, khi chọn lựa mua rau, củ, quả.</p><p><b>Về nguồn gốc và hình thức trưng bày</b></p><ul><li>Nên chọn những sản phẩm có nguồn gốc từ các đơn vị được cấp giấy chứng nhận đủ điều kiện sản xuất, sơ chế rau, quả an toàn hoặc giấy chứng nhận VietGAP (giấy chứng nhận phù hợp với tiêu chuẩn GAP khác).</li><li>Nên chọn những sản phẩm rau quả có bao gói, thùng chứa, dây buộc hợp vệ sinh. Trên bao bì hoặc nhãn gắn trực tiếp vào từng sản phẩm tối thiểu phải có các thông tin của nhà sản xuất, nhà cung cấp.</li><li>Nên lựa chọn thực phẩm ở những nơi cung cấp uy tín. Chọn thực phẩm tươi mới, không bị dập nát.</li></ul><p>&nbsp;Mùa khô nguy cơ ô nhiễm dư lượng thuốc bảo vệ thực vật trong rau sẽ cao hơn mùa mưa.</p><ul><li>Nên chọn rau vào vụ chính, là thời điểm cây trồng phát triển bình thường, ít bị sâu bệnh, dẫn đến số lần sử dụng thuốc bảo vệ thực và phân bón ít.&nbsp;</li><li>Ở vụ nghịch,&nbsp;để đạt năng suất cao phải sử dụng thuốc bảo vệ thực vật và phân bón nhiều, nên rau có khả năng có dư lượng thuốc bảo vệ, phân bón hóa học vượt quá giới hạn cho phép.</li></ul><p><i>Rau muống:</i>&nbsp;Không nên mua những bó rau có cọng to hơn bình thường, rau giòn, lá màu xanh đen, nhìn nghiêng mặt trên của lá rau rất bóng và mướt. Khi nước luộc rau này nguội, nước sẽ biến thành màu xanh đen và có vẩn kết tủa đen; khi ăn xong, nếu tinh ý ta nhận thấy có vị chát.</p><p><i>&nbsp;Rau bí (ngọn và lá của cây bí ngô):</i>&nbsp;Không nên mua bó rau có ngọn dài, khoảng cách giữa các lóng xa nhau (ngọn vươn dài), tay cuống mập và ngắn, ít lông tơ, ngọn bí màu xanh nhạt, lá màu xanh đen...</p><p><i>Rau cần:&nbsp;</i>Khi thấy thân rau to, ngó rau trắng ngần, rau nhanh bị héo thì không nên mua. Nếu để đến ngày hôm sau thì rau héo úa, thân khô tóp lại nhăn nheo, khi xào nấu lá rau biến màu xanh đen.</p><p><i>Đối với củ quả:</i>&nbsp;Không nên chọn những trái quá lớn, mà chọn những trái có kích thước vừa phải hoặc hơi nhỏ. Không chọn những trái da căng và có vết nứt dọc theo thân, những trái da xanh bóng.</p><p>&nbsp;</p>",
            tags: [
                { url: "/news", name: "rau sạch" },
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "lựa chọn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 3,
            path: "/news/7-cach-chon-hoa-qua-tuoi-ngon-nhat",
            image: require("../static/images/news/nav-fruits.png"),
            title: "7 Cách chọn hoa quả tươi ngon nhất",
            des: "Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo, chọ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo,&nbsp; chọn các quả có nhiều mảng sẫm màu hơn, do mặt trời gây ra ở lớp vỏ ngoài. Đường được tích tụ ở những vùng này sẽ khiến quả đào ngọt hơn. Bạn cũng nên chọn các quả đào có một đường hằn ngang qua phần cuống để được thưởng thức trọn vẹn hương vị đặc trưng của loại trái cây này.</p><p><strong>Bơ</strong></p><p>Hãy nhìn xuống phần phía dưới hõm cuống của quả bơ. Màu nâu sẽ đồng nghĩa với quả bơ đã chín nẫu bên trong. Màu xanh lục ám chỉ quả bơ đã chín và đến độ ăn ngon.</p><p><strong>Xoài</strong></p><p>Màu sắc không phải luôn luôn báo hiệu tình trạng chín của các quả xoài. Xoài chín sẽ có mùi thơm, nên hãy dùng mũi của bạn để chọn được quả xoài ưng ý.</p><p><strong>Dưa hấu</strong></p><p>Hãy chọn quả dưa hấu cho cảm giác nặng so với kích cỡ của nó. Mảng màu vàng trên lớp vỏ giáp đất cũng báo hiệu quả dưa đã chín. Hãy vỗ vào quả dưa để cách xa tai bạn khoảng 5cm, nếu bạn nghe thấy tiếng kêu trầm đục là dưa chín, không bị xốp.</p><p><strong>Táo</strong></p><p>Dù màu sắc của quả táo như thế nào, lớp vỏ ngoài của nó cũng cần sáng bóng và trơn phẳng, không bị bầm dập hoặc nhăn nheo. Loại táo xanh có vị chua và thích hợp để làm bánh nướng, trong khi hai loại táo Gala và Fuji ngọt hơn, thích hợp để ăn.</p><p><strong>Dưa vàng</strong></p><p>Cần tránh chọn các quả dưa vàng có vỏ quá xanh. Hãy kiểm tra độ mềm, báo hiệu tình trạng chín của quả dưa ở phần cuống, Bạn cũng cần tránh lựa các quả dưa có lớp vỏ ngoài bị trầy xước.</p><p><strong>Cam</strong></p><p>Các quả cam nặng hơn sẽ mọng nước hơn. Trong khi đó, các điểm màu sẫm hoặc sáng ở lớp vỏ có thể ám chỉ sự hư hại trong quá trình vận chuyển cam. Nắn vỏ cam để đảm bảo rằng nó không bị tách rời khỏi phần bên trong. Cam tươi ngon sẽ có mùi thơm ở phần cuống.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 4,
            path: "/news/13-cong-dung-it-biet-cua-bap-cai",
            image: require("..//static/images/news/healthiest-fruits-to-eat.png"),
            title: "13 công dụng ít biết của bắp cải",
            des: "Thành phần dinh dưỡng và lượng vitamin trong bắp cải nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ng...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Thành phần dinh dưỡng và lượng vitamin trong&nbsp;bắp cải&nbsp;nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ngoài ra, vitamin A và P trong cải bắp kết hợp với nhau làm cho thành mạch máu bền vững hơn.</p><p>Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:</p><p><strong>Giúp hình thành các tế bào hồng cầu</strong></p><p>Sắt là một thành phần giúp thúc đẩy quá trình hình thành của các tế bào hồng cầu, do đó tránh được các triệu chứng của bệnh thiếu máu. Tiêu thụ cải bắp kết hợp với nước cam hoặc nước bưởi có khả năng tối ưu hóa sự hấp thụ chất sắt từ bắp cải.</p><p><strong>Ngăn ngừa ung thư</strong></p><p>Bắp cải và các loại rau cùng họ có chứa một chất có thể chống lại tế bào ung thư trong cơ thể. Chúng là những chất kích thích các enzym để kiềm chế tốc độ tăng trưởng khối u.</p><p>Nghiên cứu ở Trung Quốc cũng chỉ ra rằng những phụ nữ tiêu thụ một số lượng nhất định các loại rau như bắp cải, bông cải xanh giảm nguy cơ của các triệu chứng ung thư vú.</p><p><strong>Tốt cho tim mạch</strong></p><p>Rau bắp cải có tác dụng gì khác nữa ? Hàm lượng kali trong bắp cải rất nhiều, tốt cho sức khỏe tim mạch và duy trì lưu thông máu khỏe mạnh đồng thời tránh tắc nghẽn các mạch máu đến tim. Kali cũng là một hợp chất tốt để làm giảm các triệu chứng của bệnh tăng huyết áp.</p><p>Hàm lượng kali cao trong bắp cải là một trong những loại thực phẩm được khuyến cáo tốt cho bệnh tăng huyết áp.</p><p><strong>Tăng cường miễn dịch</strong></p><p>Không chỉ trái cây như cam, nho hoặc táo mới có nhiều vitamin C, trong bắp cải cũng có rất nhiều loại vitamin này, do đó công dụng của bắp cải còn là làm cho hệ thống miễn dịch phát triển mạnh hơn. Vitamin C cũng rất tốt cho chăm sóc sức khỏe làn da</p><p><strong>Giảm trọng lượng cơ thể</strong></p><p>Bắp cải là một trong những loại rau tốp đầu được đề nghị cho những người muốn giảm cân một cách tự nhiên lành mạnh. Bắp cải có chứa rất nhiều thành phần hữu ích của vitamin, khoáng chất và chất dinh dưỡng khác.</p><p>Bạn có thể ăn bắp cải với số lượng lớn vì nó có hàm lượng chất xơ đủ cao và ít calo, nó sẽ không làm tăng trọng lượng của bạn.</p><p><strong>Giải độc cơ thể</strong></p><p>Do có chứa hàm lượng vitamin C và lưu huỳnh cao, bắp cải có thể giúp loại bỏ độc tố (gốc tự do). Các gốc tự do là một trong những nguyên nhân chính của bệnh viêm khớp, bệnh ngoài da, bệnh thấp khớp và bệnh gút.</p><p><strong>Tốt cho não</strong></p><p>Bắp cải hoặc các loại rau họ cải là nguồn cung cấp rất nhiều vitamin K và anthocyanin có thể giúp cho sức khỏe tâm thần và sự tập trung của não bộ.</p><p>Các dưỡng chất này cũng có thể ngăn ngừa tổn thương thần kinh, giúp ngăn ngừa bệnh Alzheimer và chứng mất trí. Vì vậy, bắp cải rất có lợi cho sức khỏe não bộ của bạn.</p><p><strong>Tốt cho mắt</strong></p><p>Bắp cải là một nguồn giàu rau quả có chứa beta-carotene. Hầu hết mọi người, đặc biệt là những người có tuổi, thường xuyên ăn bắp cải cho họ khả năng ngăn chặn sự thoái hóa điểm vàng và có thể cải thiện sức khỏe mắt cũng như ngăn ngừa đục thủy tinh thể.</p><p>Chất beta carotene theo một số nghiên cứu có thể giảm ung thư tuyến tiền liệt.</p><p><strong>Chống viêm</strong></p><p>Bắp cải có chất chống viêm và là một nguồn chính glutamine. Glutamine là một chất chống viêm mạnh, vì vậy, ăn bắp cải có thể làm giảm tác dụng của các bệnh như viêm, kích ứng, dị ứng, đau khớp, sốt và các rối loạn về da.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 1,
            path: "/news/meo-chon-dua-hau-ngon-tram-qua-nhu-mot",
            image: require("../static/images/news/dua-hau-41-800x600.png"),
            title: "Mẹo chọn dưa hấu ngon trăm quả như một",
            des: "Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>&nbsp;Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu không chọn khéo, bạn dễ mua phải quả dưa non, cùi dày, không ngọt. Mẹo chọn dưa hấu ngon, trăm quả như một trong bài viết dưới đây sẽ khiến bạn tự tin hơn khi mua thứ quả này.</p><p>Dưa càng chín thì vỏ dưa càng nhẵn. Với loại có vân thì các vân phải rõ ràng. Nếu quả vỏ đen thì màu sắc phải đen sẫm, có ánh. Ngoài ra, để biết chất lượng bên trong quả dưa, nên dùng ngón tay ấn vào vỏ dưa. Nếu quả dưa cứng là loại chất lượng, nếu vỏ mềm thì không nên mua.</p><p>Dùng tay vỗ vào quả dưa, nếu quả dưa phát ra tiếng kêu đanh, chắc là dưa già, dưa chín. Nếu quả dưa phát ra tiếng nhẹ, bộp bộp là quả dưa bị non, hoặc chín nẫu bên trong.</p><p>Dưa đã chín là dưa có cuống khô, héo. Nếu cuống dưa màu xanh lá, quả dưa này đã được hái quá sớm và chưa chín.</p><p><strong>Núm dưa</strong></p><p>Núm của quả dưa hấu ngon thường tròn đều và hơi lõm xuống.</p><p><strong>Cân nặng</strong></p><p>Khi chọn dưa hấu, hãy nhấc quả dưa lên và áng chừng cân nặng. Quả nào càng nhỏ mà càng nặng thì chứng tỏ quả dưa đó càng già, ngon, mọng nước. Nếu dưa nhẹ hơn so với khoảng ước lượng thì không nên mua vì rất có thể đó sẽ là quả dưa bị xốp.</p><p>Đây là khu vực thường tiếp xúc với mặt đất nên hay có màu vàng. Nếu chúng có màu vàng hoặc vàng cam chứ không phải màu trắng, đó là quả dưa hấu ngon.</p>",
            tags: [
                { url: "/news", name: "tư vấn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 2,
            path: "/news/chuyen-gia-huong-dan-chon-rau-cu-qua-an-toan",
            image: require("../static/images/news/cach-nhan-biet-rau-an-toan-0.png"),
            title: "Chuyên gia hướng dẫn chọn rau, củ, quả an toàn",
            des: "Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực vật ngoài danh mục để rau, củ lớn nhanh, đẹp mắt nhằm thu lợi bất chính, mặc sức khỏe người tiêu dùng.</p><p>Để tự bảo vệ sức khỏe mình, người tiêu dùng nên thực hiện những hướng dẫn dưới đây của bà&nbsp;<b>Nguyễn Thị Lệ Thoa</b>, Trưởng phòng Quản lý an toàn thực phẩm thuộc Chi cục Bảo vệ thực vật TP.HCM, khi chọn lựa mua rau, củ, quả.</p><p><b>Về nguồn gốc và hình thức trưng bày</b></p><ul><li>Nên chọn những sản phẩm có nguồn gốc từ các đơn vị được cấp giấy chứng nhận đủ điều kiện sản xuất, sơ chế rau, quả an toàn hoặc giấy chứng nhận VietGAP (giấy chứng nhận phù hợp với tiêu chuẩn GAP khác).</li><li>Nên chọn những sản phẩm rau quả có bao gói, thùng chứa, dây buộc hợp vệ sinh. Trên bao bì hoặc nhãn gắn trực tiếp vào từng sản phẩm tối thiểu phải có các thông tin của nhà sản xuất, nhà cung cấp.</li><li>Nên lựa chọn thực phẩm ở những nơi cung cấp uy tín. Chọn thực phẩm tươi mới, không bị dập nát.</li></ul><p>&nbsp;Mùa khô nguy cơ ô nhiễm dư lượng thuốc bảo vệ thực vật trong rau sẽ cao hơn mùa mưa.</p><ul><li>Nên chọn rau vào vụ chính, là thời điểm cây trồng phát triển bình thường, ít bị sâu bệnh, dẫn đến số lần sử dụng thuốc bảo vệ thực và phân bón ít.&nbsp;</li><li>Ở vụ nghịch,&nbsp;để đạt năng suất cao phải sử dụng thuốc bảo vệ thực vật và phân bón nhiều, nên rau có khả năng có dư lượng thuốc bảo vệ, phân bón hóa học vượt quá giới hạn cho phép.</li></ul><p><i>Rau muống:</i>&nbsp;Không nên mua những bó rau có cọng to hơn bình thường, rau giòn, lá màu xanh đen, nhìn nghiêng mặt trên của lá rau rất bóng và mướt. Khi nước luộc rau này nguội, nước sẽ biến thành màu xanh đen và có vẩn kết tủa đen; khi ăn xong, nếu tinh ý ta nhận thấy có vị chát.</p><p><i>&nbsp;Rau bí (ngọn và lá của cây bí ngô):</i>&nbsp;Không nên mua bó rau có ngọn dài, khoảng cách giữa các lóng xa nhau (ngọn vươn dài), tay cuống mập và ngắn, ít lông tơ, ngọn bí màu xanh nhạt, lá màu xanh đen...</p><p><i>Rau cần:&nbsp;</i>Khi thấy thân rau to, ngó rau trắng ngần, rau nhanh bị héo thì không nên mua. Nếu để đến ngày hôm sau thì rau héo úa, thân khô tóp lại nhăn nheo, khi xào nấu lá rau biến màu xanh đen.</p><p><i>Đối với củ quả:</i>&nbsp;Không nên chọn những trái quá lớn, mà chọn những trái có kích thước vừa phải hoặc hơi nhỏ. Không chọn những trái da căng và có vết nứt dọc theo thân, những trái da xanh bóng.</p><p>&nbsp;</p>",
            tags: [
                { url: "/news", name: "rau sạch" },
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "lựa chọn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 3,
            path: "/news/7-cach-chon-hoa-qua-tuoi-ngon-nhat",
            image: require("../static/images/news/nav-fruits.png"),
            title: "7 Cách chọn hoa quả tươi ngon nhất",
            des: "Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo, chọ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo,&nbsp; chọn các quả có nhiều mảng sẫm màu hơn, do mặt trời gây ra ở lớp vỏ ngoài. Đường được tích tụ ở những vùng này sẽ khiến quả đào ngọt hơn. Bạn cũng nên chọn các quả đào có một đường hằn ngang qua phần cuống để được thưởng thức trọn vẹn hương vị đặc trưng của loại trái cây này.</p><p><strong>Bơ</strong></p><p>Hãy nhìn xuống phần phía dưới hõm cuống của quả bơ. Màu nâu sẽ đồng nghĩa với quả bơ đã chín nẫu bên trong. Màu xanh lục ám chỉ quả bơ đã chín và đến độ ăn ngon.</p><p><strong>Xoài</strong></p><p>Màu sắc không phải luôn luôn báo hiệu tình trạng chín của các quả xoài. Xoài chín sẽ có mùi thơm, nên hãy dùng mũi của bạn để chọn được quả xoài ưng ý.</p><p><strong>Dưa hấu</strong></p><p>Hãy chọn quả dưa hấu cho cảm giác nặng so với kích cỡ của nó. Mảng màu vàng trên lớp vỏ giáp đất cũng báo hiệu quả dưa đã chín. Hãy vỗ vào quả dưa để cách xa tai bạn khoảng 5cm, nếu bạn nghe thấy tiếng kêu trầm đục là dưa chín, không bị xốp.</p><p><strong>Táo</strong></p><p>Dù màu sắc của quả táo như thế nào, lớp vỏ ngoài của nó cũng cần sáng bóng và trơn phẳng, không bị bầm dập hoặc nhăn nheo. Loại táo xanh có vị chua và thích hợp để làm bánh nướng, trong khi hai loại táo Gala và Fuji ngọt hơn, thích hợp để ăn.</p><p><strong>Dưa vàng</strong></p><p>Cần tránh chọn các quả dưa vàng có vỏ quá xanh. Hãy kiểm tra độ mềm, báo hiệu tình trạng chín của quả dưa ở phần cuống, Bạn cũng cần tránh lựa các quả dưa có lớp vỏ ngoài bị trầy xước.</p><p><strong>Cam</strong></p><p>Các quả cam nặng hơn sẽ mọng nước hơn. Trong khi đó, các điểm màu sẫm hoặc sáng ở lớp vỏ có thể ám chỉ sự hư hại trong quá trình vận chuyển cam. Nắn vỏ cam để đảm bảo rằng nó không bị tách rời khỏi phần bên trong. Cam tươi ngon sẽ có mùi thơm ở phần cuống.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 4,
            path: "/news/13-cong-dung-it-biet-cua-bap-cai",
            image: require("..//static/images/news/healthiest-fruits-to-eat.png"),
            title: "13 công dụng ít biết của bắp cải",
            des: "Thành phần dinh dưỡng và lượng vitamin trong bắp cải nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ng...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Thành phần dinh dưỡng và lượng vitamin trong&nbsp;bắp cải&nbsp;nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ngoài ra, vitamin A và P trong cải bắp kết hợp với nhau làm cho thành mạch máu bền vững hơn.</p><p>Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:</p><p><strong>Giúp hình thành các tế bào hồng cầu</strong></p><p>Sắt là một thành phần giúp thúc đẩy quá trình hình thành của các tế bào hồng cầu, do đó tránh được các triệu chứng của bệnh thiếu máu. Tiêu thụ cải bắp kết hợp với nước cam hoặc nước bưởi có khả năng tối ưu hóa sự hấp thụ chất sắt từ bắp cải.</p><p><strong>Ngăn ngừa ung thư</strong></p><p>Bắp cải và các loại rau cùng họ có chứa một chất có thể chống lại tế bào ung thư trong cơ thể. Chúng là những chất kích thích các enzym để kiềm chế tốc độ tăng trưởng khối u.</p><p>Nghiên cứu ở Trung Quốc cũng chỉ ra rằng những phụ nữ tiêu thụ một số lượng nhất định các loại rau như bắp cải, bông cải xanh giảm nguy cơ của các triệu chứng ung thư vú.</p><p><strong>Tốt cho tim mạch</strong></p><p>Rau bắp cải có tác dụng gì khác nữa ? Hàm lượng kali trong bắp cải rất nhiều, tốt cho sức khỏe tim mạch và duy trì lưu thông máu khỏe mạnh đồng thời tránh tắc nghẽn các mạch máu đến tim. Kali cũng là một hợp chất tốt để làm giảm các triệu chứng của bệnh tăng huyết áp.</p><p>Hàm lượng kali cao trong bắp cải là một trong những loại thực phẩm được khuyến cáo tốt cho bệnh tăng huyết áp.</p><p><strong>Tăng cường miễn dịch</strong></p><p>Không chỉ trái cây như cam, nho hoặc táo mới có nhiều vitamin C, trong bắp cải cũng có rất nhiều loại vitamin này, do đó công dụng của bắp cải còn là làm cho hệ thống miễn dịch phát triển mạnh hơn. Vitamin C cũng rất tốt cho chăm sóc sức khỏe làn da</p><p><strong>Giảm trọng lượng cơ thể</strong></p><p>Bắp cải là một trong những loại rau tốp đầu được đề nghị cho những người muốn giảm cân một cách tự nhiên lành mạnh. Bắp cải có chứa rất nhiều thành phần hữu ích của vitamin, khoáng chất và chất dinh dưỡng khác.</p><p>Bạn có thể ăn bắp cải với số lượng lớn vì nó có hàm lượng chất xơ đủ cao và ít calo, nó sẽ không làm tăng trọng lượng của bạn.</p><p><strong>Giải độc cơ thể</strong></p><p>Do có chứa hàm lượng vitamin C và lưu huỳnh cao, bắp cải có thể giúp loại bỏ độc tố (gốc tự do). Các gốc tự do là một trong những nguyên nhân chính của bệnh viêm khớp, bệnh ngoài da, bệnh thấp khớp và bệnh gút.</p><p><strong>Tốt cho não</strong></p><p>Bắp cải hoặc các loại rau họ cải là nguồn cung cấp rất nhiều vitamin K và anthocyanin có thể giúp cho sức khỏe tâm thần và sự tập trung của não bộ.</p><p>Các dưỡng chất này cũng có thể ngăn ngừa tổn thương thần kinh, giúp ngăn ngừa bệnh Alzheimer và chứng mất trí. Vì vậy, bắp cải rất có lợi cho sức khỏe não bộ của bạn.</p><p><strong>Tốt cho mắt</strong></p><p>Bắp cải là một nguồn giàu rau quả có chứa beta-carotene. Hầu hết mọi người, đặc biệt là những người có tuổi, thường xuyên ăn bắp cải cho họ khả năng ngăn chặn sự thoái hóa điểm vàng và có thể cải thiện sức khỏe mắt cũng như ngăn ngừa đục thủy tinh thể.</p><p>Chất beta carotene theo một số nghiên cứu có thể giảm ung thư tuyến tiền liệt.</p><p><strong>Chống viêm</strong></p><p>Bắp cải có chất chống viêm và là một nguồn chính glutamine. Glutamine là một chất chống viêm mạnh, vì vậy, ăn bắp cải có thể làm giảm tác dụng của các bệnh như viêm, kích ứng, dị ứng, đau khớp, sốt và các rối loạn về da.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 1,
            path: "/news/meo-chon-dua-hau-ngon-tram-qua-nhu-mot",
            image: require("../static/images/news/dua-hau-41-800x600.png"),
            title: "Mẹo chọn dưa hấu ngon trăm quả như một",
            des: "Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>&nbsp;Dưa hấu có rất nhiều tác dụng như giải khát, tiêu độc, giàu dược tính... được nhiều người ưa thích. Tuy nhiên, nếu không chọn khéo, bạn dễ mua phải quả dưa non, cùi dày, không ngọt. Mẹo chọn dưa hấu ngon, trăm quả như một trong bài viết dưới đây sẽ khiến bạn tự tin hơn khi mua thứ quả này.</p><p>Dưa càng chín thì vỏ dưa càng nhẵn. Với loại có vân thì các vân phải rõ ràng. Nếu quả vỏ đen thì màu sắc phải đen sẫm, có ánh. Ngoài ra, để biết chất lượng bên trong quả dưa, nên dùng ngón tay ấn vào vỏ dưa. Nếu quả dưa cứng là loại chất lượng, nếu vỏ mềm thì không nên mua.</p><p>Dùng tay vỗ vào quả dưa, nếu quả dưa phát ra tiếng kêu đanh, chắc là dưa già, dưa chín. Nếu quả dưa phát ra tiếng nhẹ, bộp bộp là quả dưa bị non, hoặc chín nẫu bên trong.</p><p>Dưa đã chín là dưa có cuống khô, héo. Nếu cuống dưa màu xanh lá, quả dưa này đã được hái quá sớm và chưa chín.</p><p><strong>Núm dưa</strong></p><p>Núm của quả dưa hấu ngon thường tròn đều và hơi lõm xuống.</p><p><strong>Cân nặng</strong></p><p>Khi chọn dưa hấu, hãy nhấc quả dưa lên và áng chừng cân nặng. Quả nào càng nhỏ mà càng nặng thì chứng tỏ quả dưa đó càng già, ngon, mọng nước. Nếu dưa nhẹ hơn so với khoảng ước lượng thì không nên mua vì rất có thể đó sẽ là quả dưa bị xốp.</p><p>Đây là khu vực thường tiếp xúc với mặt đất nên hay có màu vàng. Nếu chúng có màu vàng hoặc vàng cam chứ không phải màu trắng, đó là quả dưa hấu ngon.</p>",
            tags: [
                { url: "/news", name: "tư vấn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 2,
            path: "/news/chuyen-gia-huong-dan-chon-rau-cu-qua-an-toan",
            image: require("../static/images/news/cach-nhan-biet-rau-an-toan-0.png"),
            title: "Chuyên gia hướng dẫn chọn rau, củ, quả an toàn",
            des: "Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Ngày tết, nhu cầu sử dụng rau, củ, quả tăng nhanh. Do vậy, một số đối tượng sử dụng hóa chất cấm, thuốc bảo vệ thực vật ngoài danh mục để rau, củ lớn nhanh, đẹp mắt nhằm thu lợi bất chính, mặc sức khỏe người tiêu dùng.</p><p>Để tự bảo vệ sức khỏe mình, người tiêu dùng nên thực hiện những hướng dẫn dưới đây của bà&nbsp;<b>Nguyễn Thị Lệ Thoa</b>, Trưởng phòng Quản lý an toàn thực phẩm thuộc Chi cục Bảo vệ thực vật TP.HCM, khi chọn lựa mua rau, củ, quả.</p><p><b>Về nguồn gốc và hình thức trưng bày</b></p><ul><li>Nên chọn những sản phẩm có nguồn gốc từ các đơn vị được cấp giấy chứng nhận đủ điều kiện sản xuất, sơ chế rau, quả an toàn hoặc giấy chứng nhận VietGAP (giấy chứng nhận phù hợp với tiêu chuẩn GAP khác).</li><li>Nên chọn những sản phẩm rau quả có bao gói, thùng chứa, dây buộc hợp vệ sinh. Trên bao bì hoặc nhãn gắn trực tiếp vào từng sản phẩm tối thiểu phải có các thông tin của nhà sản xuất, nhà cung cấp.</li><li>Nên lựa chọn thực phẩm ở những nơi cung cấp uy tín. Chọn thực phẩm tươi mới, không bị dập nát.</li></ul><p>&nbsp;Mùa khô nguy cơ ô nhiễm dư lượng thuốc bảo vệ thực vật trong rau sẽ cao hơn mùa mưa.</p><ul><li>Nên chọn rau vào vụ chính, là thời điểm cây trồng phát triển bình thường, ít bị sâu bệnh, dẫn đến số lần sử dụng thuốc bảo vệ thực và phân bón ít.&nbsp;</li><li>Ở vụ nghịch,&nbsp;để đạt năng suất cao phải sử dụng thuốc bảo vệ thực vật và phân bón nhiều, nên rau có khả năng có dư lượng thuốc bảo vệ, phân bón hóa học vượt quá giới hạn cho phép.</li></ul><p><i>Rau muống:</i>&nbsp;Không nên mua những bó rau có cọng to hơn bình thường, rau giòn, lá màu xanh đen, nhìn nghiêng mặt trên của lá rau rất bóng và mướt. Khi nước luộc rau này nguội, nước sẽ biến thành màu xanh đen và có vẩn kết tủa đen; khi ăn xong, nếu tinh ý ta nhận thấy có vị chát.</p><p><i>&nbsp;Rau bí (ngọn và lá của cây bí ngô):</i>&nbsp;Không nên mua bó rau có ngọn dài, khoảng cách giữa các lóng xa nhau (ngọn vươn dài), tay cuống mập và ngắn, ít lông tơ, ngọn bí màu xanh nhạt, lá màu xanh đen...</p><p><i>Rau cần:&nbsp;</i>Khi thấy thân rau to, ngó rau trắng ngần, rau nhanh bị héo thì không nên mua. Nếu để đến ngày hôm sau thì rau héo úa, thân khô tóp lại nhăn nheo, khi xào nấu lá rau biến màu xanh đen.</p><p><i>Đối với củ quả:</i>&nbsp;Không nên chọn những trái quá lớn, mà chọn những trái có kích thước vừa phải hoặc hơi nhỏ. Không chọn những trái da căng và có vết nứt dọc theo thân, những trái da xanh bóng.</p><p>&nbsp;</p>",
            tags: [
                { url: "/news", name: "rau sạch" },
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "lựa chọn" },
                { url: "/news", name: "sức khoẻ" },
            ],
        },
        {
            id: 3,
            path: "/news/7-cach-chon-hoa-qua-tuoi-ngon-nhat",
            image: require("../static/images/news/nav-fruits.png"),
            title: "7 Cách chọn hoa quả tươi ngon nhất",
            des: "Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo, chọ...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Một vài mẹo nhỏ sau đây sẽ giúp các bà nội trợ chọn được các loại trái cây phổ biến như bơ, dưa hấu, xoài, táo,&nbsp; chọn các quả có nhiều mảng sẫm màu hơn, do mặt trời gây ra ở lớp vỏ ngoài. Đường được tích tụ ở những vùng này sẽ khiến quả đào ngọt hơn. Bạn cũng nên chọn các quả đào có một đường hằn ngang qua phần cuống để được thưởng thức trọn vẹn hương vị đặc trưng của loại trái cây này.</p><p><strong>Bơ</strong></p><p>Hãy nhìn xuống phần phía dưới hõm cuống của quả bơ. Màu nâu sẽ đồng nghĩa với quả bơ đã chín nẫu bên trong. Màu xanh lục ám chỉ quả bơ đã chín và đến độ ăn ngon.</p><p><strong>Xoài</strong></p><p>Màu sắc không phải luôn luôn báo hiệu tình trạng chín của các quả xoài. Xoài chín sẽ có mùi thơm, nên hãy dùng mũi của bạn để chọn được quả xoài ưng ý.</p><p><strong>Dưa hấu</strong></p><p>Hãy chọn quả dưa hấu cho cảm giác nặng so với kích cỡ của nó. Mảng màu vàng trên lớp vỏ giáp đất cũng báo hiệu quả dưa đã chín. Hãy vỗ vào quả dưa để cách xa tai bạn khoảng 5cm, nếu bạn nghe thấy tiếng kêu trầm đục là dưa chín, không bị xốp.</p><p><strong>Táo</strong></p><p>Dù màu sắc của quả táo như thế nào, lớp vỏ ngoài của nó cũng cần sáng bóng và trơn phẳng, không bị bầm dập hoặc nhăn nheo. Loại táo xanh có vị chua và thích hợp để làm bánh nướng, trong khi hai loại táo Gala và Fuji ngọt hơn, thích hợp để ăn.</p><p><strong>Dưa vàng</strong></p><p>Cần tránh chọn các quả dưa vàng có vỏ quá xanh. Hãy kiểm tra độ mềm, báo hiệu tình trạng chín của quả dưa ở phần cuống, Bạn cũng cần tránh lựa các quả dưa có lớp vỏ ngoài bị trầy xước.</p><p><strong>Cam</strong></p><p>Các quả cam nặng hơn sẽ mọng nước hơn. Trong khi đó, các điểm màu sẫm hoặc sáng ở lớp vỏ có thể ám chỉ sự hư hại trong quá trình vận chuyển cam. Nắn vỏ cam để đảm bảo rằng nó không bị tách rời khỏi phần bên trong. Cam tươi ngon sẽ có mùi thơm ở phần cuống.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
        {
            id: 4,
            path: "/news/13-cong-dung-it-biet-cua-bap-cai",
            image: require("..//static/images/news/healthiest-fruits-to-eat.png"),
            title: "13 công dụng ít biết của bắp cải",
            des: "Thành phần dinh dưỡng và lượng vitamin trong bắp cải nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ng...",
            author: "Đào Quý Thương",
            date: "02/10/2018",
            content:
                "<p>Thành phần dinh dưỡng và lượng vitamin trong&nbsp;bắp cải&nbsp;nhiều gấp 4,5 lần so với cà rốt và 3,6 lần so với khoai tây. Ngoài ra, vitamin A và P trong cải bắp kết hợp với nhau làm cho thành mạch máu bền vững hơn.</p><p>Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:</p><p><strong>Giúp hình thành các tế bào hồng cầu</strong></p><p>Sắt là một thành phần giúp thúc đẩy quá trình hình thành của các tế bào hồng cầu, do đó tránh được các triệu chứng của bệnh thiếu máu. Tiêu thụ cải bắp kết hợp với nước cam hoặc nước bưởi có khả năng tối ưu hóa sự hấp thụ chất sắt từ bắp cải.</p><p><strong>Ngăn ngừa ung thư</strong></p><p>Bắp cải và các loại rau cùng họ có chứa một chất có thể chống lại tế bào ung thư trong cơ thể. Chúng là những chất kích thích các enzym để kiềm chế tốc độ tăng trưởng khối u.</p><p>Nghiên cứu ở Trung Quốc cũng chỉ ra rằng những phụ nữ tiêu thụ một số lượng nhất định các loại rau như bắp cải, bông cải xanh giảm nguy cơ của các triệu chứng ung thư vú.</p><p><strong>Tốt cho tim mạch</strong></p><p>Rau bắp cải có tác dụng gì khác nữa ? Hàm lượng kali trong bắp cải rất nhiều, tốt cho sức khỏe tim mạch và duy trì lưu thông máu khỏe mạnh đồng thời tránh tắc nghẽn các mạch máu đến tim. Kali cũng là một hợp chất tốt để làm giảm các triệu chứng của bệnh tăng huyết áp.</p><p>Hàm lượng kali cao trong bắp cải là một trong những loại thực phẩm được khuyến cáo tốt cho bệnh tăng huyết áp.</p><p><strong>Tăng cường miễn dịch</strong></p><p>Không chỉ trái cây như cam, nho hoặc táo mới có nhiều vitamin C, trong bắp cải cũng có rất nhiều loại vitamin này, do đó công dụng của bắp cải còn là làm cho hệ thống miễn dịch phát triển mạnh hơn. Vitamin C cũng rất tốt cho chăm sóc sức khỏe làn da</p><p><strong>Giảm trọng lượng cơ thể</strong></p><p>Bắp cải là một trong những loại rau tốp đầu được đề nghị cho những người muốn giảm cân một cách tự nhiên lành mạnh. Bắp cải có chứa rất nhiều thành phần hữu ích của vitamin, khoáng chất và chất dinh dưỡng khác.</p><p>Bạn có thể ăn bắp cải với số lượng lớn vì nó có hàm lượng chất xơ đủ cao và ít calo, nó sẽ không làm tăng trọng lượng của bạn.</p><p><strong>Giải độc cơ thể</strong></p><p>Do có chứa hàm lượng vitamin C và lưu huỳnh cao, bắp cải có thể giúp loại bỏ độc tố (gốc tự do). Các gốc tự do là một trong những nguyên nhân chính của bệnh viêm khớp, bệnh ngoài da, bệnh thấp khớp và bệnh gút.</p><p><strong>Tốt cho não</strong></p><p>Bắp cải hoặc các loại rau họ cải là nguồn cung cấp rất nhiều vitamin K và anthocyanin có thể giúp cho sức khỏe tâm thần và sự tập trung của não bộ.</p><p>Các dưỡng chất này cũng có thể ngăn ngừa tổn thương thần kinh, giúp ngăn ngừa bệnh Alzheimer và chứng mất trí. Vì vậy, bắp cải rất có lợi cho sức khỏe não bộ của bạn.</p><p><strong>Tốt cho mắt</strong></p><p>Bắp cải là một nguồn giàu rau quả có chứa beta-carotene. Hầu hết mọi người, đặc biệt là những người có tuổi, thường xuyên ăn bắp cải cho họ khả năng ngăn chặn sự thoái hóa điểm vàng và có thể cải thiện sức khỏe mắt cũng như ngăn ngừa đục thủy tinh thể.</p><p>Chất beta carotene theo một số nghiên cứu có thể giảm ung thư tuyến tiền liệt.</p><p><strong>Chống viêm</strong></p><p>Bắp cải có chất chống viêm và là một nguồn chính glutamine. Glutamine là một chất chống viêm mạnh, vì vậy, ăn bắp cải có thể làm giảm tác dụng của các bệnh như viêm, kích ứng, dị ứng, đau khớp, sốt và các rối loạn về da.</p>",
            tags: [
                { url: "/news", name: "bí quyết" },
                { url: "/news", name: "chọn quả" },
                { url: "/news", name: "hoa quả sạch" },
                { url: "/news", name: "rau củ" },
            ],
        },
    ],
    feedback: [
        {
            id: 1,
            name: "Yến Nhi",
            image: require("../static/images/feedback/anh_1.png"),
            job: "Ngân hàng",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
        {
            id: 2,
            name: "Hoàng Thảo",
            image: require("../static/images/feedback/anh_2.png"),
            job: "Dược sĩ",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
        {
            id: 3,
            name: "Thu Trang",
            image: require("../static/images/feedback/anh_3.png"),
            job: "Kinh doanh",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
        {
            id: 4,
            name: "Yến Nhi",
            image: require("../static/images/feedback/anh_1.png"),
            job: "Ngân hàng",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
        {
            id: 5,
            name: "Hoàng Thảo",
            image: require("../static/images/feedback/anh_2.png"),
            job: "Dược sĩ",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
        {
            id: 6,
            name: "Thu Trang",
            image: require("../static/images/feedback/anh_3.png"),
            job: "Kinh doanh",
            content:
                "Mình rất hay mua hàng tại đây vì tin tưởng chất lượng, đương nhiên là chất lượng an toàn rồi, ngại ra chợ mua đồ mà lại không yên tâm.",
        },
    ],
    comments: [
        {
            id: 1,
            name: "phan cpng kmj",
            date: "17/12/2018",
            content: "sdsđsds",
            ava: require("../static/images/news/ava.png"),
            newsId: 1,
        },
    ],
    relation: {
        id: 10,
        name: "Album",
        images: [
            require("../static/images/home/al1.png"),
            require("../static/images/home/al2.png"),
            require("../static/images/home/al3.png"),
            require("../static/images/home/al4.png"),
            require("../static/images/home/al5.png"),
            require("../static/images/home/al6.png"),
            require("../static/images/home/al7.png"),
        ],
    },
};

// Date: YYYY/MM/DD
export const products = [
    {
        id: 1,
        name: "Bắp cải xanh",
        type: "Rau củ",
        status: "Hết hàng",
        price: 18000,
        oldPrice: 18000,
        date: "2019/10/01",
        images: [
            require("../static/images/products/bap-cai-xanh-1.png"),
            require("../static/images/products/bap-cai-xanh-2.png"),
            require("../static/images/products/bap-cai-xanh-3.png"),
        ],
        url: "/products/bap-cai-xanh",
        description:
            "Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 2,
        name: "Súp lơ tươi ngon",
        type: "Rau củ",
        status: "Còn hàng",
        price: 40000,
        oldPrice: 40000,
        date: "2019/10/02",
        images: [
            require("../static/images/products/sup-lo-1.png"),
            require("../static/images/products/sup-lo-2.png"),
            require("../static/images/products/sup-lo-3.png"),
        ],
        url: "/products/sup-lo-tuoi-ngon",
        description:
            "Súp lơ xanh là một loại cây thuộc loài Cải bắp dại, có hoa lớn ở đầu, thường được dùng như rau. Bông cải xanh thường được chế biến bằng cách luộc hoặc hấp, nhưng cũng có thể được ăn sống như là rau sống trong những đĩa đồ nguội khai vị.",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 3,
        name: "Xoài Thái ngọt",
        type: "Trái cây",
        status: "Còn hàng",
        price: 65000,
        oldPrice: 70000,
        date: "2019/10/02",
        images: [
            require("../static/images/products/xoai-1.png"),
            require("../static/images/products/xoai-2.png"),
            require("../static/images/products/xoai-3.png"),
        ],
        url: "/products/xoai-thai-ngot",
        description:
            "Xoài Thái Lan cho trái tròn dài, hơi cong ở phía đuôi, vỏ xanh đậm có thể ăn xanh, chín đều rất ngon. Xoài Thái Lan là giống xoài ăn xanh được nhập từ Thái Lan. Vỏ trái có màu xanh đậm và rất dày, trọng lượng trái trung bình 300 - 350gr, khi trái vừa cứng bao đầu đã có vị ngọt, khoái khẩu.",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 4,
        name: "Cam ngọt Hàm Yên",
        type: "Trái cây",
        status: "Còn hàng",
        price: 84000,
        oldPrice: 88000,
        date: "2019/10/03",
        images: [
            require("../static/images/products/cam-1.png"),
            require("../static/images/products/cam-2.png"),
            require("../static/images/products/cam-3.png"),
        ],
        url: "/products/cam-ngot-ham-yen",
        description:
            "Cam được trồng rộng rãi ở những nơi có khí hậu ấm áp, và vị cam có thể biến đổi từ ngọt đến chua. Cam thường lột vỏ và ăn lúc còn tươi, hay vắt lấy nước.",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 5,
        name: "Kiwi nhập khẩu",
        type: "Trái cây",
        status: "Còn hàng",
        price: 385000,
        oldPrice: 430000,
        date: "2019/10/05",
        images: [
            require("../static/images/products/kiwi-1.png"),
            require("../static/images/products/kiwi-2.png"),
            require("../static/images/products/kiwi-3.png"),
        ],
        url: "/products/ki-wi-nhap-khau",
        description:
            "Quả kiwi có màu xanh và vàng rất đẹp mắt, mùi vị thơm ngon. Đây cũng là loại quả được xếp hạng trong top đầu các loại trái cây rất tốt cho sức khỏe và mang lại cho phụ nữ một làn da khỏe đẹp.",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 6,
        name: "Dưa vàng loại to",
        type: "Trái cây",
        status: "Còn hàng",
        price: 150000,
        oldPrice: 168000,
        date: "2019/10/08",
        images: [
            require("../static/images/products/dua-vang-1.png"),
            require("../static/images/products/dua-vang-2.png"),
            require("../static/images/products/dua-vang-3.png"),
        ],
        url: "/products/dua-vang-loai-to",
        description:
            "Không phải ai cũng biết đến các thành phần dinh dưỡng như vitamin, khoáng chất và chất chống oxy hóa có trong loại trái cây này. Các nghiên cứu đã chứng minh được lợi ích của dưa vàng (dưa lưới) với sức khỏe con người giúp cải thiện đáng kể sức khỏe",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 7,
        name: "Cà chua nhập khẩu",
        type: "Rau củ",
        status: "Còn hàng",
        price: 65000,
        oldPrice: 85000,
        date: "2019/11/01",
        images: [
            require("../static/images/products/ca-chua-1.png"),
            require("../static/images/products/ca-chua-2.png"),
            require("../static/images/products/ca-chua-3.png"),
        ],
        url: "/products/ca-chua-nhap-khau",
        description:
            "Vì hiếm nên giá cà chua bi khá cao. Giá dao động từng ngày, có ngày rẻ thì 55.000, 60.0000 đồng một kg. Những ngày khan hiếm, giá đắt thì khoảng 80.000 đồng một kg",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
    {
        id: 8,
        name: "Dưa hấu Long An",
        type: "Trái cây",
        status: "Còn hàng",
        price: 45000,
        oldPrice: 50000,
        date: "2019/10/01",
        images: [
            require("../static/images/products/dua-hau-1.png"),
            require("../static/images/products/dua-hau-2.png"),
            require("../static/images/products/dua-hau-3.png"),
        ],
        url: "/products/dua-hau-long-an",
        description:
            "Dưa hấu chứa ít calo (46kg calo mỗi cốc), chứa hàm lượng vitamin A và vitamin C cao (dưa hấu cung cấp 17% lượng vitamin A và 20% lượng vitamin C cần thiết cho cơ thể bạn mỗi ngày)",
        note: "Đơn vị tính cho sản phẩm rau,củ,quả,thịt,cá là: Giá tiền/Kg - số lượng tính bằng Kg. <br>- Đối với mặt hàng nước uống, và sản phẩm khác - được tính bằng Giá tiền/ số lượng sản phẩm.<br>- Nếu khách hàng có nhu cầu mua số lẻ, hoặc số lượng lớn vui lòng liên hệ trực tiếp.<br>Xin cảm ơn !",
    },
];
