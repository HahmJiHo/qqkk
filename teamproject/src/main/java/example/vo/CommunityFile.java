package example.vo;

import java.io.Serializable;

public class CommunityFile implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int communityNo;
  protected String fileName;
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getCommunityNo() {
    return communityNo;
  }
  public void setCommunityNo(int communityNo) {
    this.communityNo = communityNo;
  }
  public String getFileName() {
    return fileName;
  }
  public void setFileName(String fileName) {
    this.fileName = fileName;
  }
  
  
}
