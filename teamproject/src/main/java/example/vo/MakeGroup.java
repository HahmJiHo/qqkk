package example.vo;

import java.io.Serializable;

public class MakeGroup implements Serializable {

	private static final long serialVersionUID = 1L;
	
	protected int no;
	protected int memberNumber;
	protected int memberCount;
	protected String groupName;
	protected String name;
	protected String email;
	protected String gphoto;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	protected String groupPhoto;
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getMemberNumber() {
		return memberNumber;
	}
	public void setMemberNumber(int memberNumber) {
		this.memberNumber = memberNumber;
	}
	public int getMemberCount() {
		return memberCount;
	}
	public void setMemberCount(int memberCount) {
		this.memberCount = memberCount;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getGroupPhoto() {
		return groupPhoto;
	}
	public void setGroupPhoto(String groupPhoto) {
		this.groupPhoto = groupPhoto;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getGphoto() {
		return gphoto;
	}
	public void setGphoto(String gphoto) {
		this.gphoto = gphoto;
	}
	@Override
	public String toString() {
		return "MakeGroup [no=" + no + ", memberNumber=" + memberNumber + ", memberCount=" + memberCount + ", groupName="
				+ groupName + ", name=" + name + ", email=" + email + "]";
	}

	
	
	
	
}
