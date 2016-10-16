package example.vo;

import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class MemberInvite implements Serializable {
	private static final long serialVersionUID = 1L;
	static SimpleDateFormat format = new SimpleDateFormat("yyy-MM-dd");
	
	protected int no;
	protected int groupNo;
	protected int memberNo;
	protected int groupGroupNo;
	protected boolean status;
	protected String name;
	protected String inviteEmail;
	protected Date createdDate;
	protected String createdDate2;
	protected String color;
	protected String groupUserName;
	protected String groupName;
	
	
	public int getMemberNo() {
		return memberNo;
	}
	
	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}
	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public int getGroupNo() {
		return groupNo;
	}

	public void setGroupNo(int groupNo) {
		this.groupNo = groupNo;
	}



	public String getInviteEmail() {
		return inviteEmail;
	}

	public void setInviteEmail(String inviteEmail) {
		this.inviteEmail = inviteEmail;
	}

	public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
    this.createdDate2 = format.format(createdDate);
  }
  public String getCreatedDate2() {
    return createdDate2;
  }
  public void setCreatedDate2(String str) {
    this.createdDate = Date.valueOf(str);
    this.createdDate2 = str;
  }
		
  public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	public int getGroupGroupNo() {
		return groupGroupNo;
	}

	public void setGroupGroupNo(int groupGroupNo) {
		this.groupGroupNo = groupGroupNo;
	}



	public String getGroupUserName() {
		return groupUserName;
	}

	public void setGroupUserName(String groupUserName) {
		this.groupUserName = groupUserName;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	@Override
	public String toString() {
		return "MemberInvite [no=" + no + ", groupNo=" + groupNo + ", memberNo=" + memberNo + ", status=" + status + ", name="
				+ name + ", inviteEmail=" + inviteEmail + ", createdDate=" + createdDate + ", createdDate2=" + createdDate2
				+ ", color=" + color + "]";
	}



	
}
