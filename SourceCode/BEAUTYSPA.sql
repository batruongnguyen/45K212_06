USE master;  
GO  
IF DB_ID (N'BEAUTY_SPA') IS NOT NULL  
DROP DATABASE BEAUTY_SPA;  
GO  
CREATE DATABASE BEAUTY_SPA
go
use BEAUTY_SPA
go

create table DATA
(
	rating_star int,
	comment nvarchar(250),
	url_img text,
	id_user varchar(50) primary key
)
go

insert into data values ('5', N'Dịch vụ rất tốt, hài lòng về không gian', '', '0905678091')
insert into data values ('4', N'Dịch vụ tốt, chăm sóc khách hàng tuyệt vời', '', '0905984561')
insert into data values ('3', N'Chưa hài lòng về không gian', '', '0908125792')
insert into data values ('2', N'Nhân viên chăm sóc không hài lòng', '', '0905674135')
insert into data values ('1', N'Cần xem xét lại thái độ, dịch vụ làm việc không uy tín', '', '0956783124')

go 
select * from data
