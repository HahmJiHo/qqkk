package example.vo;

import java.io.Serializable;

public class MySchedule implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int groupscNo;
  protected String name;
  protected String nickName;
  protected String groupName;
  protected String title;
  protected String start;
  protected String end;
  protected String placeName;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getGroupscNo() {
    return groupscNo;
  }
  public void setGroupscNo(int groupscNo) {
    this.groupscNo = groupscNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getNickName() {
    return nickName;
  }
  public void setNickName(String nickName) {
    this.nickName = nickName;
  }
  public String getGroupName() {
    return groupName;
  }
  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getStart() {
    return start;
  }
  public void setStart(String start) {
    this.start = start;
  }
  public String getEnd() {
    return end;
  }
  public void setEnd(String end) {
    this.end = end;
  }
  public String getPlaceName() {
    return placeName;
  }
  public void setPlaceName(String placeName) {
    this.placeName = placeName;
  }
 
  
 
}
