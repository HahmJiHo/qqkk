package example.vo;

import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class Community implements Serializable {
  private static final long serialVersionUID = 1L;
  static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
  
  
  protected int no;                       // 글번호
  protected int userNo;                   // 회원번호
  protected String userNicName ;          // 회원닉네임
  protected String userPhoto;             // 회원사진
  
  protected String title;
  protected String contents;
  protected String address;               // 주소

  protected Date registerDate;  
  protected String registerDate2;         // 클라이언트가 사용할 문자열 형식(yyyy-MM-dd)의 날짜 
  protected int viewCount;
  
  protected int boardLike;                // 좋아요
  
  protected String commentNo;             // 댓글번호
  protected String commentUserNo;         // 댓글회원번호
  protected String communityBoardNo;      // 댓글회원번호
  protected String commentUserNicName;    // 댓글작성자 
  protected String comment;               // 댓글
  protected Date commentRegisterDate;     // 댓글 등록날짜
  protected String commentRegisterDate2;  
  
  protected int fileNo;                   // 업로드 파일넘버
  protected String fileName;              // 업로드 파일사진
  
  
  
	public static SimpleDateFormat getFormat() {
		return format;
	}
	public static void setFormat(SimpleDateFormat format) {
		Community.format = format;
	}
	
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getUserNo() {
		return userNo;
	}
	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}
	public String getUserNicName() {
		return userNicName ;
	}
	public void setUserNicName(String userNicName ) {
		this.userNicName  = userNicName ;
	}
	public String getUserPhoto() {
		return userPhoto;
	}
	public void setUserPhoto(String userPhoto) {
		this.userPhoto = userPhoto;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
		this.registerDate2 = format.format(registerDate);
	}
	public String getRegisterDate2() {
		return registerDate2;
	}
	public void setRegisterDate2(String str) {
	  this.registerDate = Date.valueOf(str);
	  this.registerDate2 = str;
	}
	
	public int getViewCount() {
		return viewCount;
	}
	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}
	public int getBoardLike() {
		return boardLike;
	}
	public void setBoardLike(int boardLike) {
		this.boardLike = boardLike;
	}
	
	public String getCommentNo() {
		return commentNo;
	}
	public void setCommentNo(String commentNo) {
		this.commentNo = commentNo;
	}
	
	public String getCommentUserNo() {
		return commentUserNo;
	}
	public void setCommentUserNo(String commentUserNo) {
		this.commentUserNo = commentUserNo;
	}
	
	
	public String getCommunityBoardNo() {
		return communityBoardNo;
	}
	public void setCommunityBoardNo(String communityBoardNo) {
		this.communityBoardNo = communityBoardNo;
	}
	
	
	
	public String getCommentUserNicName() {
		return commentUserNicName;
	}
	public void setCommentUserNicName(String commentUserNicName) {
		this.commentUserNicName = commentUserNicName;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
	public Date getCommentRegisterDate() {
		return commentRegisterDate;
	}
	public void setCommentRegisterDate(Date commentRegisterDate) {
		this.commentRegisterDate = commentRegisterDate;
		this.commentRegisterDate2 = format.format(commentRegisterDate);
	}
	public String getCommentRegisterDate2() {
		return commentRegisterDate2;
	}
	public void setCommentRegisterDate2(String str) {
		this.commentRegisterDate = Date.valueOf(str);
		this.commentRegisterDate2 = str;
	}
	
	public int getFileNo() {
		return fileNo;
	}
	public void setFileNo(int fileNo) {
		this.fileNo = fileNo;
	}
	
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	

	
}



