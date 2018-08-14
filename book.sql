-- 创建数据库
create database books;

-- 切换数据库
use books;

create table books(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	bookName varchar(30),
	bookPrice float,
	bookAuthor varchar(128),
	bookPress varchar(128)
);
insert into books (bookName,bookPrice,bookAuthor,bookPress) values("西游记",10,"吴承恩","北京");
insert into books (bookName,bookPrice,bookAuthor,bookPress) values("西游记",10,"吴承恩","北京");
insert into books (bookName,bookPrice,bookAuthor,bookPress) values("西游记",10,"吴承恩","北京");
insert into books (bookName,bookPrice,bookAuthor,bookPress) values("西游记",10,"吴承恩","北京");